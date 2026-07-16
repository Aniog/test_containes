import React from 'react';

const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="bg-muted py-4 border-b border-border overflow-hidden">
      <div className="flex animate-marquee md:justify-center gap-12 whitespace-nowrap px-6">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-1 h-1 bg-accent rounded-full" />
            <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
