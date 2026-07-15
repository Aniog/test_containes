import React from 'react';

const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto py-4 px-6 md:px-12 flex flex-wrap justify-center gap-8 md:gap-16">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-medium whitespace-nowrap">
              {item}
            </span>
            {index < items.length - 1 && <span className="text-stone-300 hidden md:inline">·</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
