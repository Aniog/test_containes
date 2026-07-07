import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="border-b border-[#D4C5A9] bg-[#F8F5F0]">
      <div className="max-w-[1440px] mx-auto px-6 py-4">
        <div className="flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2 text-center text-xs tracking-[2px] text-[#8B7355]">
          {items.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
