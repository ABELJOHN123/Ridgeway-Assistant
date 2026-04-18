import events from "../data/events.json" with { type: "json" };

export const getNearbyEvents = async ({ location }) => {
  return events.filter(e => e.location !== location);
};