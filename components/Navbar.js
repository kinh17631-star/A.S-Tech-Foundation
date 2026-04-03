export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 30px",
      borderBottom: "1px solid #1e293b"
    }}>
      <h2>A.S Tech</h2>

      <div>
        <a href="/" style={{ margin: "0 10px" }}>Home</a>
        <a href="/products" style={{ margin: "0 10px" }}>Products</a>
        <a href="/about" style={{ margin: "0 10px" }}>About</a>
        <a href="/contact" style={{ margin: "0 10px" }}>Contact</a>
      </div>
    </nav>
  );
}
