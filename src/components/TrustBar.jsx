import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="trust-bar border-y border-velmora-border py-3 bg-velmora-bg">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-1 text-center">
          {items.map((item, index) => (
            <span key={index} className="text-[10px] tracking-[0.15em]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
