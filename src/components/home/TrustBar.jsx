import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-white border-b border-gray-100 py-3 overflow-hidden">
      <div className="flex justify-center items-center space-x-8 md:space-x-16 whitespace-nowrap animate-in fade-in duration-500">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-2">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
              {item}
            </span>
            {idx !== items.length - 1 && (
               <span className="w-1 h-1 bg-accent rounded-full hidden md:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
