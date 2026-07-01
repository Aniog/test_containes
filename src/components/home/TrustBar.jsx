const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="bg-velmora-sand py-3 overflow-hidden whitespace-nowrap border-y border-velmora-charcoal/5">
      <div className="flex justify-center items-center space-x-12 px-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 shrink-0">
            <span className="w-1.5 h-1.5 bg-velmora-accent rounded-full"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-velmora-charcoal/70">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
