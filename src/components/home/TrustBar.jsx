import React from "react";

const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

const TrustBar = () => {
  // Duplicate so the marquee can loop seamlessly
  const loop = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <section className="bg-muted text-foreground border-y border-border overflow-hidden">
      <div className="container-velmora hidden md:flex items-center justify-between gap-6 py-4 text-[11px] uppercase tracking-widest2 text-muted-foreground">
        {ITEMS.map((item, i) => (
          <React.Fragment key={i}>
            <span className="whitespace-nowrap">{item}</span>
            {i < ITEMS.length - 1 && <span className="text-border">·</span>}
          </React.Fragment>
        ))}
      </div>
      <div className="md:hidden flex items-center gap-8 whitespace-nowrap py-4 animate-marquee-x text-[11px] uppercase tracking-widest2 text-muted-foreground">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            {item}
            <span className="text-border">·</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
