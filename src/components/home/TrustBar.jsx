import React from 'react';

const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="bg-secondary border-b border-border py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 flex flex-wrap justify-center md:justify-between gap-6 md:gap-4 items-center">
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="text-[10px] md:text-[11px] uppercase-widest tracking-extra font-medium opacity-80">
              {item}
            </span>
            {idx < items.length - 1 && (
              <span className="hidden md:block w-1 h-1 rounded-full bg-accent/40" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
