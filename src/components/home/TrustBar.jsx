import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-stone-50 border-b border-stone-100 py-3 overflow-hidden">
      <div className="flex justify-center items-center gap-4 md:gap-12 text-[10px] uppercase tracking-[0.2em] font-medium text-stone-500 whitespace-nowrap px-6">
        {items.map((item, index) => (
          <React.Fragment key={item}>
            <span>{item}</span>
            {index < items.length - 1 && <span className="text-stone-300">•</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
