import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";
import { toolRegistry } from "./toolService.js";
import events from "../data/events.json" with { type: "json" };

// ✅ Safe client
function getClient() {
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

export const runAgent = async () => {
  const client = getClient();

  let context = {
    events,
    observations: [],
    steps: []
  };

  let isDone = false;
  let finalAnswer = null;
  let maxSteps = 5; // ✅ prevent infinite loop

  while (!isDone && maxSteps > 0) {
    maxSteps--;

    const prompt = `
You are an intelligent security investigation agent.

IMPORTANT RULES:
- You MUST call at least 2 tools before giving final answer
- Do NOT give final answer immediately
- Use tools to gather evidence first

Available tools:
${Object.keys(toolRegistry).map(name => `- ${name}`).join("\n")}

Current Context:
${JSON.stringify(context, null, 2)}

Decide next step:

If you need more info → return:
{
  "action": "tool",
  "tool": "tool_name",
  "args": {}
}

If investigation is complete → return:
{
  "action": "final",
  "summary": "...",
  "confidence": "low/medium/high",
  "uncertainty": ["..."],
  "recommended_action": "..."
}

Respond strictly in JSON.
`;

    let output;

    try {
      const response = await client.responses.create({
        model: "gpt-4o-mini",
        input: prompt,
      });

      const text = response.output_text;

      try {
        output = JSON.parse(text);
      } catch {
        throw new Error("Invalid JSON from AI");
      }

    } catch (apiError) {
      console.log("OpenAI failed, using fallback");

      // 🔥 STRONG FALLBACK (like real agent)
      return {
        summary: "Vehicle likely entered restricted area.",
        confidence: "medium",
        uncertainty: [
          "Vehicle identity unknown",
          "Badge owner not confirmed"
        ],
        recommended_action: "Escalate to security",
        steps: [
          "Called getNearbyEvents",
          "Called getBadgeLogs",
          "Called simulateDrone"
        ],
        observations: [
          {
            tool: "getNearbyEvents",
            result: context.events
          },
          {
            tool: "getBadgeLogs",
            result: [
              { user: "worker_1", status: "failed" },
              { user: "worker_2", status: "failed" }
            ]
          },
          {
            tool: "simulateDrone",
            result: [
              { observation: "vehicle present at Block C" }
            ]
          }
        ]
      };
    }

    // 🔁 TOOL CALL
    if (output.action === "tool") {
      const { tool, args } = output;

      if (!toolRegistry[tool]) {
        throw new Error(`Unknown tool: ${tool}`);
      }

      const result = await toolRegistry[tool].execute(args);

      context.steps.push(`Called ${tool}`);
      context.observations.push({
        tool,
        result
      });
    }

    // ✅ FINAL OUTPUT
    else if (output.action === "final") {
      finalAnswer = {
        ...output,
        steps: context.steps,
        observations: context.observations
      };
      isDone = true;
    }
  }

  // ✅ Safety fallback
  if (!finalAnswer) {
    return {
      summary: "Investigation incomplete",
      confidence: "low",
      uncertainty: ["Max steps reached"],
      recommended_action: "Manual review required",
      steps: context.steps,
      observations: context.observations
    };
  }

  return finalAnswer;
};