import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-white border-b border-base-dark py-4 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between md:justify-around items-center gap-4 text-center">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
              <span className="w-1 h-1 bg-accent rounded-full" />
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
