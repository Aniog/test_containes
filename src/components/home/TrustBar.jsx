import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-white py-6 border-b border-black/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center max-w-5xl mx-auto">
          {items.map((item, i) => (
            <div key={i} className="flex items-center space-x-10">
              <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-muted-foreground whitespace-nowrap">
                {item}
              </span>
              {i !== items.length - 1 && <span className="hidden md:block text-neutral-200 text-xs">•</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
