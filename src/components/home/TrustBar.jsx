import React from "react";
import { Gem, Globe2, Leaf, RotateCcw } from "lucide-react";

const ITEMS = [
  { icon: Globe2, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: Leaf, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-sand bg-ivory" aria-label="Our promises">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-4 px-5 py-5 md:grid-cols-4 md:px-8">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-2.5 text-espresso"
          >
            <Icon className="h-4 w-4 shrink-0 text-gold" />
            <span className="text-[10px] uppercase tracking-[0.18em] md:text-[11px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
