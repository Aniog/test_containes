import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-white border-b border-stone py-4 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-2 md:space-y-0 text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted font-medium">
          {items.map((item, index) => (
            <div key={item} className="flex items-center space-x-2">
              {index !== 0 && <span className="hidden md:inline">•</span>}
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
