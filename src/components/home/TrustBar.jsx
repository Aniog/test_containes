import React from 'react';

export function TrustBar() {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="bg-foreground text-background py-4 border-b border-border/20">
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="flex justify-between items-center whitespace-nowrap overflow-x-auto gap-8 md:gap-4 no-scrollbar hide-scrollbar">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-xs md:text-sm uppercase tracking-widest text-[#d6d3d1] whitespace-nowrap">{item}</span>
              {index < items.length - 1 && (
                <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-primary/60"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
