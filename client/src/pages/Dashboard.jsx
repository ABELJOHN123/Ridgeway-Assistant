import { useState } from "react";
import { runInvestigation } from "../services/api";
import MapView from "../components/MapView";
import Timeline from "../components/Timeline";
import AIReport from "../components/AIReport";
import ReviewPanel from "../components/ReviewPanel";
import Loader from "../components/Loader";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [decision, setDecision] = useState("");

  const handleRun = async () => {
    setLoading(true);
    const res = await runInvestigation();
    setData(res);
    setLoading(false);
    setDecision("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ridgeway 6:10 Assistant</h1>

      <button onClick={handleRun}>Investigate Night</button>

      {loading && <Loader />}

      {data && (
        <>
          <MapView observations={data.observations} />
          <Timeline observations={data.observations} />
          <AIReport report={data} />

          <ReviewPanel setDecision={setDecision} />

          {decision && (
            <h3 style={{ marginTop: "15px" }}>
              Final Decision: {decision}
            </h3>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;