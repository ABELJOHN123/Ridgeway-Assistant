import { getNearbyEvents } from "../tools/getNearbyEvents.js";
import { getBadgeLogs } from "../tools/getBadgeLogs.js";
import { getDroneLogs } from "../tools/getDroneLogs.js";
import { simulateDrone } from "../tools/simulateDrone.js";

export const toolRegistry = {
  getNearbyEvents: {
    description: "Find events near a location and time",
    execute: getNearbyEvents
  },
  getBadgeLogs: {
    description: "Fetch badge access logs for a location",
    execute: getBadgeLogs
  },
  getDroneLogs: {
    description: "Get drone observations for an area",
    execute: getDroneLogs
  },
  simulateDrone: {
    description: "Send drone to inspect an area",
    execute: simulateDrone
  }
};