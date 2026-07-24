const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <section className="border-b border-sand bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              <span className="text-xs md:text-sm tracking-wide text-stone font-sans">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
