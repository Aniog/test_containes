import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-[#1A1A1A] text-white/80 py-4 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium gap-y-4 gap-x-8">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-2 whitespace-nowrap">
            <span className="w-1 h-1 bg-accent rounded-full" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
