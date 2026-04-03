export const metadata = {
  title: "A.S Tech Foundation",
  description: "Buy Premium Ready-Made Websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial", background: "#0f172a", color: "white" }}>
        
        {/* Navbar */}
        <nav style={{ padding: "15px 30px", borderBottom: "1px solid #1e293b", display: "flex", justifyContent: "space-between" }}>
          <h2>A.S Tech</h2>
          <div>
            <a href="/" style={{ margin: "0 10px", color: "white" }}>Home</a>
            <a href="/products" style={{ margin: "0 10px", color: "white" }}>Products</a>
            <a href="/about" style={{ margin: "0 10px", color: "white" }}>About</a>
            <a href="/contact" style={{ margin: "0 10px", color: "white" }}>Contact</a>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer style={{ padding: "20px", textAlign: "center", borderTop: "1px solid #1e293b" }}>
          © 2026 A.S Tech Foundation
        </footer>

      </body>
    </html>
  );
}
