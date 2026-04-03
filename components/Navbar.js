export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 backdrop-blur-md bg-white/5 border-b border-white/10">
      <h2 className="text-xl font-bold text-blue-400">A.S Tech</h2>

      <div className="space-x-4">
        <a href="/" className="hover:text-blue-400">Home</a>
        <a href="/products" className="hover:text-blue-400">Products</a>
        <a href="/about" className="hover:text-blue-400">About</a>
        <a href="/contact" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
}
