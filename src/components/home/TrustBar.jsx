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
    <section className="bg-velmora-ivory border-b border-velmora-line">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 py-4 md:py-3.5">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-3 text-velmora-espresso"
            >
              <Icon size={16} strokeWidth={1.5} className="text-velmora-gold" />
              <span className="text-[11px] uppercase tracking-[0.22em]">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
