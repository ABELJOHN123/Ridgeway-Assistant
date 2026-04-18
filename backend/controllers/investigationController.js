import { runAgent } from "../services/agentService.js";

export const investigateNight = async (req, res) => {
  try {
    const result = await runAgent();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Investigation failed" });
  }
};