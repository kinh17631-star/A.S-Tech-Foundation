import ProductCard from "../../components/ProductCard";

const products = [
  {
    id: "ai-prompt-hub",
    name: "AI Prompt Hub",
    price: "$29",
    image: "IMG_4219.jpeg"
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
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">All Websites</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
