import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-secondary/30 border-b border-border py-4 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between items-center gap-4 text-center">
            {items.map((item, index) => (
                <div key={index} className="flex-1 min-w-[150px]">
                    <span className="text-[10px] md:text-xs brand-title text-muted-foreground whitespace-nowrap">
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
