const AIReport = ({ report }) => {
  const getColor = () => {
    if (report.confidence === "high") return "green";
    if (report.confidence === "medium") return "orange";
    return "red";
  };

  return (
    <div style={{ marginTop: "20px", border: "1px solid gray", padding: "10px" }}>
      <h3>AI Investigation Report</h3>

      <p><b>Summary:</b> {report.summary}</p>

      <p>
        <b>Confidence:</b>{" "}
        <span style={{ color: getColor() }}>
          {report.confidence}
        </span>
      </p>

      <p><b>Uncertainty:</b></p>
      <ul>
        {report.uncertainty.map((u, i) => (
          <li key={i}>{u}</li>
        ))}
      </ul>

      <p><b>Recommended Action:</b> {report.recommended_action}</p>
    </div>
  );
};

export default AIReport;