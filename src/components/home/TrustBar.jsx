import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-white border-b border-stone-100 py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex justify-around items-center space-x-8 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium text-charcoal/60 whitespace-nowrap overflow-x-auto no-scrollbar">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-4">
            <span>{item}</span>
            {idx < items.length - 1 && <span className="text-stone-300">·</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
