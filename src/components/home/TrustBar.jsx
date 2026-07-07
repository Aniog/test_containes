import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-background border-b border-border py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-center">
          {items.map((item, index) => (
            <React.Fragment key={item}>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-foreground/80">
                {item}
              </span>
              {index < items.length - 1 && (
                <span className="hidden md:inline text-border">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
