import React from 'react';

const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic'
];

const TrustBar = () => {
  return (
    <div className="bg-white border-b border-neutral-100 py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center overflow-x-auto no-scrollbar space-x-8 md:space-x-0">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center whitespace-nowrap">
              {index > 0 && <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#C5A059] mx-12 opacity-30" />}
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-neutral-500">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
