import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="border-y border-[#D4C9B8] bg-white py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2 text-center">
          {items.map((item, index) => (
            <span
              key={index}
              className="text-xs tracking-[0.15em] text-[#6B6058] uppercase"
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
