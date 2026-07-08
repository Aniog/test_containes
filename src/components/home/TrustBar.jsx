const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <section className="border-b border-sand bg-cream">
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {items.map((item, i) => (
          <span key={i} className="text-xs uppercase tracking-nav text-stone font-medium flex items-center gap-2">
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#B8860B' }} />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
