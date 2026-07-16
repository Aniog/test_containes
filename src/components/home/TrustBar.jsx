import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 lg:gap-x-16">
          {items.map((item, idx) => (
            <div key={item} className="flex items-center space-x-2">
               <span className="text-[10px] text-stone-400 uppercase tracking-[0.2em] font-medium whitespace-nowrap">
                {item}
               </span>
               {idx !== items.length - 1 && <span className="hidden sm:inline text-stone-200">•</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
