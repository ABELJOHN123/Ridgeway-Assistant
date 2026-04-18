const AIReport = ({ report }) => {
  const color =
    report.confidence === "high"
      ? "text-green-600"
      : report.confidence === "medium"
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <div>
      <h2 className="font-semibold mb-2">AI Report</h2>

      <p className="text-sm text-gray-700 mb-2">
        {report.summary}
      </p>

      <p className={`font-semibold ${color}`}>
        Confidence: {report.confidence}
      </p>

      <div className="mt-2">
        <p className="text-sm font-medium">Uncertainty:</p>
        <ul className="list-disc ml-5 text-sm text-gray-600">
          {report.uncertainty.map((u, i) => (
            <li key={i}>{u}</li>
          ))}
        </ul>
      </div>

      <p className="mt-2 text-sm">
        <b>Action:</b> {report.recommended_action}
      </p>
    </div>
  );
};

export default AIReport;