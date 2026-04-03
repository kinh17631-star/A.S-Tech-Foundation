const products = {
  "ai-prompt-hub": {
    name: "AI Prompt Hub",
    price: "$29",
    description: "A website to sell AI prompts."
  },
  "portfolio-site": {
    name: "Portfolio Website",
    price: "$19",
    description: "Personal portfolio website."
  }
};

export default function ProductPage({ params }) {
  const product = products[params.id];

  if (!product) return <h1 className="p-10">Product not found</h1>;

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="mt-2 text-gray-400">{product.description}</p>
      <h3 className="mt-4 text-blue-400 text-xl">{product.price}</h3>

      <button className="mt-6 px-6 py-3 bg-blue-500 rounded">
        Buy Now
      </button>
    </main>
  );
}
