import ProductCard from "../../components/ProductCard";

const products = [
  {
    id: "ai-prompt-hub",
    name: "AI Prompt Hub (Micro-SaaS)",
    price: "$99", // Updated for SaaS value (Admin panel + Freemium)
    image: "/IMG_4219.jpeg" // Added '/' so it loads correctly from public folder
  },
  {
    id: "scan-dine",
    name: "ScanDine - Digital QR Menu",
    price: "$149", // High-value B2B SaaS for Restaurants
    image: "/scandine.png" // Screenshot lekar public folder me daal dena
  },
  {
    id: "last-password",
    name: "LastPassword (Ad-Ready)",
    price: "$49", // Pre-monetized with Adsterra ads
    image: "/lastpassword.png" // Screenshot lekar public folder me daal dena
  },
  {
    id: "portfolio-site",
    name: "Portfolio Website",
    price: "$19",
    image: "/portfolio.png" // Screenshot lekar public folder me daal dena
  }
];

export default function Products() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Premium Websites & SaaS</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
