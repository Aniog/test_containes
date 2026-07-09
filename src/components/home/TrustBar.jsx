import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="trust-bar border-y border-[#E5DFD6] py-3.5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-2 text-center">
          {items.map((item, index) => (
            <span key={index} className="whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;