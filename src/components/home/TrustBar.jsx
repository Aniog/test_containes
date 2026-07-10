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
    <section className="bg-ink-900 text-textondark border-y border-ink-700">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16">
        <ul className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-ink-700">
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            return (
              <li
                key={it.label}
                className={`flex items-center justify-center gap-3 py-4 md:py-5 ${
                  i >= 2 ? "border-t md:border-t-0 border-ink-700" : ""
                }`}
              >
                <Icon size={16} strokeWidth={1.3} className="text-champagne-300" />
                <span className="label-cap text-textondark/90">{it.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
