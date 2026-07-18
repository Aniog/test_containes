const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <section className="border-y border-border bg-cream">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-1 h-1 bg-gold rounded-full" />
            <span className="font-sans text-xs text-muted-fg tracking-wide">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
