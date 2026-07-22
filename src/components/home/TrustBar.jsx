import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-brand-cream border-b border-brand-stone/10 py-4 px-6 md:px-12 flex justify-center md:justify-between items-center gap-8 overflow-hidden whitespace-nowrap">
      {items.map((item, i) => (
        <span key={i} className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-stone flex-shrink-0">
          {item}
        </span>
      ))}
    </div>
  );
};

export default TrustBar;
