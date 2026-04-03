export default function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #1e293b",
      padding: "15px",
      borderRadius: "10px",
      width: "250px"
    }}>
      <img src={product.image} width="100%" />

      <h3>{product.name}</h3>
      <p>{product.price}</p>

      <div style={{ display: "flex", gap: "10px" }}>
        <a href={`/product/${product.id}`}>
          <button style={{
            padding: "8px 10px",
            background: "#3b82f6",
            color: "white",
            border: "none"
          }}>
            View
          </button>
        </a>

        <button style={{
          padding: "8px 10px",
          background: "#22c55e",
          color: "white",
          border: "none"
        }}>
          Buy
        </button>
      </div>
    </div>
  );
}
