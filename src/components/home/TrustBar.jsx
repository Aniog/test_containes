const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-velmora-black text-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 py-4">
          {items.map((item) => (
            <span
              key={item}
              className="text-[11px] sm:text-xs font-sans font-medium tracking-widest uppercase text-velmora-cream/80"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
