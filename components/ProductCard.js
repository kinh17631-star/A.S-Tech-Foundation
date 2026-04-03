export default function ProductCard({ product }) {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-xl hover:scale-105 transition">
      
      <img src={product.image} className="rounded-lg" />

      <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
      <p className="text-blue-400">{product.price}</p>

      <div className="flex gap-2 mt-3">
        <a href={`/product/${product.id}`}>
          <button className="px-3 py-1 bg-blue-500 rounded">
            View
          </button>
        </a>

        <button className="px-3 py-1 bg-green-500 rounded">
          Buy
        </button>
      </div>
    </div>
  );
}
