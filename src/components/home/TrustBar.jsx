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
      className="bg-ivory-50 border-y border-hairline"
      aria-label="Our promise"
    >
      <div className="max-w-9xl mx-auto px-5 sm:px-8 lg:px-12">
        <ul className="grid grid-cols-2 md:grid-cols-4 divide-x divide-hairline">
          {items.map(({ icon: Icon, label }, i) => (
            <li
              key={label}
              className={[
                "flex items-center justify-center gap-2 sm:gap-3 py-4 sm:py-5 text-center",
                i < 2 ? "border-b md:border-b-0 border-hairline" : "",
                i % 2 === 0 ? "border-r md:border-r-0 border-hairline" : "",
              ].join(" ")}
            >
              <Icon className="w-4 h-4 text-gold-500 shrink-0" strokeWidth={1.25} />
              <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-widest2 text-espresso">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
