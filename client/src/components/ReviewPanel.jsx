const ReviewPanel = ({ setDecision }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Review Decision</h3>

      <button onClick={() => setDecision("Approved")}>
        Approve
      </button>

      <button onClick={() => setDecision("Marked as Harmless")}>
        Mark Harmless
      </button>

      <button onClick={() => setDecision("Escalated to Security")}>
        Escalate
      </button>
    </div>
  );
};

export default ReviewPanel;