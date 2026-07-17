import React from "react";
import { Truck, RefreshCw, Gem, ShieldCheck } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="bg-ink text-cream/85 border-y border-cream/10">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-cream/10">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2.5 py-4 md:py-5 px-2"
            >
              <Icon className="w-4 h-4 text-gold shrink-0" strokeWidth={1.5} />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.14em] text-cream/80">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
