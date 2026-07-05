import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-white border-b overflow-hidden">
      <div className="max-w-screen-2xl mx-auto flex flex-wrap justify-between items-center py-4 px-6 md:px-12 gap-y-2">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-3">
            {index > 0 && <span className="hidden md:block w-1.5 h-1.5 bg-accent/30 rounded-full" />}
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
