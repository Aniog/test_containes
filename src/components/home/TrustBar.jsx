import React from "react";
import { Gem, Globe, Leaf, RotateCcw } from "lucide-react";

const items = [
  { icon: Globe, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: Leaf, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="border-b border-line-dark bg-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-line-dark px-4 md:grid-cols-4 md:divide-x md:px-8">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-2.5 py-4 text-center"
          >
            <Icon className="h-4 w-4 shrink-0 text-gold-soft" strokeWidth={1.5} />
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-ivory/80 md:text-[11px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
