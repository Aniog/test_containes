import React from 'react';

const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <section className="bg-stone-100 py-3 border-y border-border overflow-hidden">
      <div className="flex justify-between md:justify-around items-center px-4 max-w-7xl mx-auto whitespace-nowrap gap-8">
        {items.map((item, idx) => (
          <span 
            key={idx} 
            className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-sans text-muted-foreground flex items-center gap-2"
          >
            <span className="w-1 h-1 bg-accent rounded-full" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
