import React from 'react';

const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="trust-bar bg-[#F1EDE6] py-4 border-b border-[#D4CFC6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-2 text-center text-[#6B645C]">
          {items.map((item, index) => (
            <span key={index} className="text-[11px] tracking-[0.15em]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
