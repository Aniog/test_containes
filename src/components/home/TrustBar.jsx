import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-muted py-4 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center gap-4 text-center md:text-left">
          {items.map((item, index) => (
            <div key={index} className="flex-1 min-w-[150px] flex items-center justify-center space-x-2">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-foreground/70">
                {item}
              </span>
              {index < items.length - 1 && (
                <span className="hidden md:inline text-border">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
