import React from "react";

const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic",
  ];

  return (
    <div className="border-b border-border bg-white">
      <div className="section-container">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 py-3 md:py-4">
          {items.map((item) => (
            <span key={item} className="text-[11px] md:text-xs font-medium uppercase tracking-[0.16em] text-ink-secondary">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
