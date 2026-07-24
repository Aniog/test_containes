const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-[#2C2420] text-[#E8E2DA] py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {item}
              {i < items.length - 1 && (
                <span className="hidden sm:inline text-[#5A4F47]">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
