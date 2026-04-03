export default function HeroSection() {
  return (
    <section style={{
      textAlign: "center",
      padding: "80px 20px"
    }}>
      <h1 style={{ fontSize: "42px" }}>
        Buy Premium Ready-Made Websites
      </h1>

      <p style={{ marginTop: "10px" }}>
        High-quality websites for your business & projects
      </p>

      <a href="/products">
        <button style={{
          marginTop: "20px",
          padding: "12px 25px",
          background: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}>
          Explore Websites
        </button>
      </a>
    </section>
  );
}
