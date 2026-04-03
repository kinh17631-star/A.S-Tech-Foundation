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

  if (!product) return <h1>Product not found</h1>;

  return (
    <main style={{ padding: "40px" }}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h3>{product.price}</h3>

      <button style={{ padding: "10px 20px", background: "#3b82f6", border: "none", color: "white" }}>
        Buy Now
      </button>
    </main>
  );
}
