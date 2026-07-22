import React from "react";
import { Truck, RefreshCcw, Sparkles, Leaf } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCcw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: Leaf, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-noir-line bg-noir-soft">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-4 px-5 py-6 md:grid-cols-4 md:px-8">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-2.5">
            <Icon className="h-4 w-4 shrink-0 text-gold" />
            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-cream/85 md:text-[11px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
