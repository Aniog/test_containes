import React from "react";
import { Truck, RotateCcw, Sparkles, ShieldCheck } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-hairline bg-cream-soft">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <ul className="grid grid-cols-2 divide-x divide-hairline md:grid-cols-4">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-3 py-5 text-center"
            >
              <Icon className="h-4 w-4 text-gold-deep" strokeWidth={1.4} />
              <span className="text-[11px] uppercase tracking-[0.22em] text-espresso/80">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
