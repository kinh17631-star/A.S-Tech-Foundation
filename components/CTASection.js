export default function CTASection() {
  return (
    <section style={{
      textAlign: "center",
      padding: "60px 20px",
      borderTop: "1px solid #1e293b",
      marginTop: "40px"
    }}>
      <h2>Need a Custom Website?</h2>

      <p>Contact us and get your own website built.</p>

      <a href="/contact">
        <button style={{
          marginTop: "15px",
          padding: "10px 20px",
          background: "#22c55e",
          color: "white",
          border: "none"
        }}>
          Contact Now
        </button>
      </a>
    </section>
  );
}
