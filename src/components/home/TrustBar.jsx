import React from "react";
import { Truck, RotateCcw, Sparkles, Leaf } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: Leaf, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="bg-cream border-b border-hairline">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 md:py-4">
        <ul className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-x-8 gap-y-3">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2.5 text-ink/80"
            >
              <Icon size={15} strokeWidth={1.5} className="text-champagne" />
              <span className="font-sans uppercase tracking-widest2 text-[10.5px] md:text-[11px]">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
