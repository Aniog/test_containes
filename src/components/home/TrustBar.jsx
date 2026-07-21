import React from "react";
import { Truck, RefreshCw, Sparkles, ShieldCheck } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section
      className="bg-ivory border-y border-espresso/10"
      aria-label="Our promise"
    >
      <div className="mx-auto max-w-screen-3xl px-5 sm:px-8 lg:px-12">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-3 lg:gap-y-0 py-4 lg:py-3">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-2.5 text-[11px] sm:text-xs uppercase tracking-[0.22em] text-espresso/85"
            >
              <Icon className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
