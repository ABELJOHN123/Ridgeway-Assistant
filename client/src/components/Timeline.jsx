
const Timeline = ({ observations }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Investigation Timeline</h3>

      {observations.map((obs, i) => (
        <div key={i} style={{ marginBottom: "10px" }}>
          <b>{obs.tool}</b>

          {obs.tool === "simulateDrone" ? (
            <p>🚁 Drone sent to {obs.result.location}</p>
          ) : (
            <p>{JSON.stringify(obs.result)}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;