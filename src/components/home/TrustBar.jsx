import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-white border-b border-border py-4 overflow-hidden whitespace-nowrap">
      <div className="flex justify-center space-x-12 md:space-x-24">
        {items.map((item, i) => (
          <div key={i} className="flex items-center space-x-4">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
