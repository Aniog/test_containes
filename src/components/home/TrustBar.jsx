import React from "react";

const trustItems = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <div className="hairline bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[hsl(var(--border))]/20">
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex items-center justify-center py-4 px-4 bg-[hsl(var(--background))]"
            >
              <span className="font-sans text-[11px] md:text-xs tracking-[0.1em] uppercase text-[hsl(var(--muted-foreground))] text-center">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}