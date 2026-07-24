import React from 'react';

const HomeTrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-muted py-4 border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 md:flex-nowrap md:justify-between text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground whitespace-nowrap">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="w-1 h-1 bg-accent rounded-full" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTrustBar;
