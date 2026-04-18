const ReviewPanel = ({ setDecision }) => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Review Decision</h2>

      <div className="flex flex-col gap-2">

        <button
          onClick={() => setDecision("Approved")}
          className="bg-green-500 text-white py-2 rounded-lg"
        >
          Approve
        </button>

        <button
          onClick={() => setDecision("Marked as Harmless")}
          className="bg-yellow-500 text-white py-2 rounded-lg"
        >
          Mark Harmless
        </button>

        <button
          onClick={() => setDecision("Escalated")}
          className="bg-red-500 text-white py-2 rounded-lg"
        >
          Escalate
        </button>

      </div>
    </div>
  );
};

export default ReviewPanel;