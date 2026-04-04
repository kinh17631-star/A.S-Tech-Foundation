import ProductCard from "../../components/ProductCard";

const products = [
  {
    id: "ai-prompt-hub",
    name: "AIPromptHub",
    price: "$99",
    image: "/images/IMG_4219.jpeg",
    link: "https://ai-prompt-hub-six.vercel.app/"
  },
  {
    id: "scan-dine",
    name: "ScanDine",
    price: "$149",
    image: "/images/IMG_4319.jpeg",
    link: "https://scan-dine-afog.vercel.app/"
  },
  {
    id: "lastpassword",
    name: "LastPassword",
    price: "$79",
    image: "/images/IMG_4220.png",
    link: "https://lastpassword-jr1s.vercel.app/"
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
