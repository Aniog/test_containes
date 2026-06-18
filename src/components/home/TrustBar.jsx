const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic",
  ];

  return (
    <section className="bg-gold-light border-y border-hairline">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-warm-gray font-medium">
            {i > 0 && <span className="hidden md:inline text-hairline">·</span>}
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
