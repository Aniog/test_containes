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
    <section className="border-y border-sand bg-ivory">
      <div className="max-w-page mx-auto px-5 md:px-10 lg:px-16 py-4 md:py-5">
        <ul className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-3 text-espresso">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.label}
                className="flex items-center gap-2.5 text-[11px] uppercase tracking-editorial"
              >
                <Icon size={15} strokeWidth={1.5} className="text-gold" />
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
