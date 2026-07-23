import React from "react";
import { Truck, RotateCcw, Sparkles, Shield } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: Shield, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="bg-cream-100 border-y border-cream-200">
      <div className="container-editorial">
        <ul className="grid grid-cols-2 md:grid-cols-4 divide-x divide-cream-200">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <li
                key={item.label}
                className={`flex items-center justify-center gap-2 md:gap-3 py-4 md:py-5 ${
                  i % 2 === 1 ? "border-l border-cream-200 md:border-l" : ""
                }`}
              >
                <Icon
                  className="w-4 h-4 text-gold-600 shrink-0"
                  strokeWidth={1.4}
                />
                <span className="text-[10px] md:text-[11px] font-medium uppercase tracking-btn text-ink-700 text-center">
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
