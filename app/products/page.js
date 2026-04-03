const products = [
  {
    id: "ai-prompt-hub",
    name: "AI Prompt Hub",
    price: "$29",
    image: "https://via.placeholder.com/300"
  },
  {
    id: "portfolio-site",
    name: "Portfolio Website",
    price: "$19",
    image: "https://via.placeholder.com/300"
  }
];

export default function Products() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>All Websites</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #1e293b", padding: "20px", borderRadius: "10px" }}>
            <img src={p.image} width="200" />
            <h3>{p.name}</h3>
            <p>{p.price}</p>

            <a href={`/product/${p.id}`}>
              <button style={{ padding: "8px 15px", background: "#22c55e", border: "none", color: "white" }}>
                View
              </button>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
