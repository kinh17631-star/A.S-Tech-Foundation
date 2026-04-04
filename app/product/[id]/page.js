const products = {
  "ai-prompt-hub": {
    name: "AIPromptHub",
    price: "$99",
    description: "A powerful AI prompt selling platform.",
    image: "/images/IMG_4219.jpeg",
    link: "https://ai-prompt-hub-six.vercel.app/",
    features: [
      "Modern UI Design",
      "AI Prompt Selling System",
      "Mobile Responsive",
      "Easy Setup"
    ]
  },

  "scan-dine": {
    name: "ScanDine",
    price: "$149",
    description: "QR-based restaurant menu & ordering system.",
    image: "/images/IMG_4319.jpeg",
    link: "https://scan-dine-afog.vercel.app/",
    features: [
      "QR Menu System",
      "Restaurant Ready",
      "Fast & Responsive",
      "Clean UI"
    ]
  },

  "lastpassword": {
    name: "LastPassword",
    price: "$79",
    description: "Secure password management web app.",
    image: "/images/IMG_4220.png",
    link: "https://lastpassword-jr1s.vercel.app/",
    features: [
      "Secure Storage",
      "Modern UI",
      "User Friendly",
      "Fast Performance"
    ]
  }
};

export default function ProductPage({ params }) {
  const product = products[params.id];

  if (!product) return <h1 className="p-10">Product not found</h1>;

  return (
    <main className="p-10 max-w-3xl mx-auto">
      
      <img src={product.image} className="rounded-lg mb-6" />

      <h1 className="text-4xl font-bold">{product.name}</h1>

      <p className="mt-4 text-gray-400">{product.description}</p>

      <h3 className="mt-6 text-2xl text-blue-400">{product.price}</h3>

      {/* Live Demo */}
      <a href={product.link} target="_blank">
        <button className="mt-4 px-5 py-2 bg-blue-500 rounded">
          Live Demo
        </button>
      </a>

      {/* Features */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">What you get:</h2>
        <ul className="mt-2 list-disc ml-5 text-gray-300">
          {product.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      {/* Urgency */}
      <p className="mt-6 text-red-400">
        ⚡ Limited Offer – Only available today!
      </p>

      {/* WhatsApp Buy */}
      <a href="https://wa.me/918650921106" target="_blank">
        <button className="mt-6 px-6 py-3 bg-green-500 rounded">
          Buy on WhatsApp
        </button>
      </a>

    </main>
  );
}
