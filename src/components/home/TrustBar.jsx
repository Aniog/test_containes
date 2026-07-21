const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="bg-[#F9F7F2] border-b border-[#E5E2DA] py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-2">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-2">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#555555]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
