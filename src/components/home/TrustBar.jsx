import React from 'react';

const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic",
  ];

  return (
    <section className="bg-white border-b hairline py-5">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-0">
          {items.map((item, i) => (
            <div key={i} className="flex items-center space-x-3 text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
