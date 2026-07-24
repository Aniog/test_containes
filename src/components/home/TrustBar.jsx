const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-[#1a1714] text-[#d4cfc8] py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-xs tracking-widest uppercase">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="w-1 h-1 bg-primary rounded-full" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
