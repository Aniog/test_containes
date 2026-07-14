import React from "react";
import { Truck, RotateCcw, Sparkles, ShieldCheck } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section
      id="trust-bar"
      aria-label="Trust benefits"
      className="bg-ivory border-y border-line"
    >
      <div className="mx-auto max-w-editorial px-5 sm:px-8 lg:px-12">
        <ul className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-line">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <li
                key={item.label}
                className={`flex items-center justify-center gap-2.5 py-3.5 border-line ${
                  i < 2 ? "border-b md:border-b-0" : ""
                }`}
              >
                <Icon
                  size={15}
                  strokeWidth={1.5}
                  className="text-gold-deep flex-shrink-0"
                />
                <span className="text-[11px] sm:text-xs tracking-widest2 uppercase text-espresso">
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
