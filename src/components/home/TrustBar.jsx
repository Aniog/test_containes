import React from "react";
import { Truck, RefreshCcw, Sparkles, ShieldCheck } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCcw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-line px-5 md:grid-cols-4 md:divide-x md:px-8">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-3 py-5"
          >
            <Icon size={16} strokeWidth={1.5} className="shrink-0 text-gold" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-bronze md:text-[11px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
