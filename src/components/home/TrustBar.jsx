import React from 'react';

const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="bg-background border-b py-4">
      <div className="container mx-auto px-6 overflow-x-auto no-scrollbar">
        <div className="flex justify-between items-center min-w-max gap-8 px-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
                {item}
              </span>
              {idx < items.length - 1 && (
                <span className="mx-8 md:mx-12 text-zinc-300">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
