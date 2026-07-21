import React from "react";
import { Truck, RotateCcw, Gem, Leaf } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: Leaf, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-stone bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <ul className="grid grid-cols-2 divide-stone py-5 md:grid-cols-4 md:divide-x">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-2.5 px-2 py-2 text-center md:py-0"
            >
              <Icon size={15} strokeWidth={1.5} className="shrink-0 text-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
