import React from 'react';

const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="bg-white border-b border-border py-4 overflow-hidden shadow-sm">
      <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-2 max-w-7xl mx-auto px-6">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <span className="text-[10px] uppercase tracking-widest font-medium text-muted-foreground whitespace-nowrap">
              {item}
            </span>
            {index < items.length - 1 && (
              <span className="text-border hidden md:inline">·</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
