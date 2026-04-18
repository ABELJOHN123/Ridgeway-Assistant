import droneLogs from "../data/droneLogs.json" with { type: "json" };

export const getDroneLogs = async ({ location }) => {
  return droneLogs.filter(log => log.area === location);
};