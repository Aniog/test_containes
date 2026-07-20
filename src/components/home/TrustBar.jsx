import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-secondary py-3 border-b border-zinc-100 overflow-hidden">
      <div className="flex justify-around items-center px-4 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <React.Fragment key={item}>
            <span className="text-[10px] uppercase-widest text-zinc-500 tracking-[0.2em] font-medium text-center">
              {item}
            </span>
            {index < items.length - 1 && (
              <span className="text-zinc-300 hidden md:block">•</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
