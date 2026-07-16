const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-brand-ivory border-y border-brand-sand/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4 flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {items.map((item, i) => (
          <span key={i} className="font-sans text-[11px] md:text-xs uppercase tracking-wide-xl text-brand-muted">
            {i > 0 && <span className="mr-4 md:mr-8 text-brand-sand">·</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
