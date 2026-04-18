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
    <div className="min-h-screen bg-gray-100 p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Ridgeway 6:10 Assistant
        </h1>

        <button
          onClick={handleRun}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          Investigate Night
        </button>
      </div>

      {loading && <Loader />}

      {data && (
        <div className="grid grid-cols-3 gap-4">

          {/* LEFT COLUMN */}
          <div className="col-span-2 space-y-4">

            <div className="bg-white p-4 rounded-xl shadow">
              <MapView observations={data.observations} />
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <Timeline observations={data.observations} />
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">

            <div className="bg-white p-4 rounded-xl shadow">
              <AIReport report={data} />
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <ReviewPanel setDecision={setDecision} />
            </div>

            {decision && (
              <div className="bg-green-100 text-green-800 p-3 rounded-xl">
                Final Decision: {decision}
              </div>
            )}

          </div>

        </div>
      )}
    </div>
  );
};

export default Dashboard;