import React from 'react';

const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="border-b border-[#E8E4DC] bg-[#F5F2ED]">
      <div className="max-w-[1400px] mx-auto px-6 py-3.5">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-1 text-[10px] tracking-[2px] text-[#6B665F]">
          {items.map((item, index) => (
            <span key={index} className="whitespace-nowrap">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;