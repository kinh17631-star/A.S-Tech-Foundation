export default function CTASection() {
  return (
    <section className="text-center py-20 border-t border-white/10 mt-10">
      <h2 className="text-3xl font-bold">Need a Custom Website?</h2>

      <p className="text-gray-400 mt-2">
        We build websites tailored to your needs
      </p>

      <a href="/contact">
        <button className="mt-5 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg">
          Contact Us
        </button>
      </a>
    </section>
  );
}
