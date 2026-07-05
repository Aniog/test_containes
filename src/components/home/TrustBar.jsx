import React from 'react';

const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <section className="bg-secondary/50 py-4 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-0">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-muted-foreground">
              {item}
            </span>
            {index < items.length - 1 && (
              <span className="hidden md:block w-px h-3 bg-border mx-4" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
