const TrustBar = () => {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-[#0D0D0D] border-y border-[#333333]">
      <div className="container">
        <div className="py-4 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {trustItems.map((item, index) => (
            <span
              key={item}
              className="text-xs md:text-[12px] uppercase tracking-[0.1em] text-[#A8A8A0] flex items-center gap-2"
            >
              {index > 0 && <span className="hidden md:inline text-[#333333]">·</span>}
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;