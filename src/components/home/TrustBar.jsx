const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-primary text-primary-foreground py-3 md:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs tracking-widest uppercase">
          {items.map((item, index) => (
            <span key={item} className="flex items-center gap-2">
              {index > 0 && <span className="w-1 h-1 bg-accent rounded-full hidden sm:inline-block" />}
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
