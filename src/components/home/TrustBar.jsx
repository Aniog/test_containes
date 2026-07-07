import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-white border-b border-velmora-divider py-4 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-charcoal/60">
        {items.map((item, index) => (
          <div key={item} className="flex items-center space-x-4">
            <span>{item}</span>
            {index < items.length - 1 && (
              <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-velmora-gold opacity-30 mx-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
