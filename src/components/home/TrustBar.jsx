import React from 'react';

const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="bg-secondary/30 py-4 border-b border-border">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="flex justify-between items-center space-x-8 md:space-x-0 overflow-x-auto no-scrollbar">
          {items.map((item, index) => (
            <div key={index} className="whitespace-nowrap flex items-center shrink-0">
              <span className="text-[10px] md:text-xs uppercase tracking-ultra-wide font-medium text-stone-600">
                {item}
              </span>
              {index < items.length - 1 && (
                <span className="hidden md:block mx-12 text-stone-300">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
