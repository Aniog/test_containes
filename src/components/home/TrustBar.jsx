import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-background border-b border-border py-4 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {items.map((item, index) => (
            <React.Fragment key={item}>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground whitespace-nowrap">
                  {item}
                </span>
              </div>
              {index < items.length - 1 && (
                <span className="hidden md:block w-1 h-1 bg-border rounded-full" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
