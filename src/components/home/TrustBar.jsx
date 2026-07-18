const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <section className="border-b border-hairline bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-muted tracking-wider uppercase">
            {i > 0 && <span className="hidden md:inline text-hairline">·</span>}
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
