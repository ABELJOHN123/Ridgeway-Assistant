import badgeLogs from "../data/badgeLogs.json" with { type: "json" };

export const getBadgeLogs = async ({ location }) => {
  return badgeLogs.filter(log => log.location === location);
};