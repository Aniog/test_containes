import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-velmora-stone border-b border-velmora-dark/5 py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex justify-around items-center px-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-2 shrink-0">
            <span className="text-[10px] uppercase tracking-widest text-velmora-muted font-sans font-medium whitespace-nowrap">
              {item}
            </span>
            {idx !== items.length - 1 && (
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-velmora-gold/30" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
