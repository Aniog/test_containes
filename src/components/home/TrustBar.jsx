import React from "react";
import { Truck, RotateCcw, Sparkles, ShieldCheck } from "lucide-react";

const ITEMS = [
  {
    Icon: Truck,
    label: "Free Worldwide Shipping",
    note: "On orders over $80",
  },
  {
    Icon: RotateCcw,
    label: "30-Day Returns",
    note: "Prepaid label included",
  },
  {
    Icon: Sparkles,
    label: "18K Gold Plated",
    note: "Over recycled brass",
  },
  {
    Icon: ShieldCheck,
    label: "Hypoallergenic",
    note: "Sensitive-skin friendly",
  },
];

export function TrustBar() {
  return (
    <section
      className="bg-cream border-b border-hairline"
      aria-label="Why shop with Velmora"
    >
      <div className="max-w-container mx-auto px-5 md:px-8 lg:px-10">
        <ul className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-hairline">
          {ITEMS.map(({ Icon, label, note }, idx) => (
            <li
              key={label}
              className={`flex items-center gap-3 md:gap-4 py-4 md:py-5 px-3 md:px-6 ${
                idx === 0 ? "lg:pl-0" : ""
              } ${idx === ITEMS.length - 1 ? "lg:pr-0" : ""}`}
            >
              <Icon
                className="w-[1.05rem] h-[1.05rem] text-gold-deep shrink-0"
                strokeWidth={1.4}
              />
              <div className="min-w-0">
                <p className="font-serif text-[0.95rem] md:text-[1rem] text-ink leading-tight">
                  {label}
                </p>
                <p className="text-[0.6875rem] uppercase tracking-[0.18em] text-muted mt-1 hidden sm:block">
                  {note}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}