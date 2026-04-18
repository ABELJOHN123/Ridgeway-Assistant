const format = (obs) => {
  switch (obs.tool) {
    case "getNearbyEvents":
      return `Found nearby activity`;
    case "getBadgeLogs":
      return `Multiple badge failures detected`;
    case "getDroneLogs":
      return `Drone previously observed activity`;
    case "simulateDrone":
      return `Drone dispatched → activity detected`;
    default:
      return "Processed event";
  }
};

const Timeline = ({ observations }) => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Investigation Timeline</h2>

      <div className="space-y-2">
        {observations.map((obs, i) => (
          <div
            key={i}
            className="bg-gray-50 p-3 rounded-lg border"
          >
            <p className="font-medium text-sm text-gray-700">
              {obs.tool}
            </p>
            <p className="text-gray-600 text-sm">
              {format(obs)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;