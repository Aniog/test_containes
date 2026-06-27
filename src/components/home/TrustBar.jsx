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
    <section
      aria-label="Our promises"
      className="border-y border-[var(--color-line)] bg-[var(--color-bone)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-6 py-4 md:py-3.5">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-2.5 text-center text-[var(--color-ink-soft)]"
            >
              <Icon size={15} strokeWidth={1.5} className="text-[var(--color-gold-deep)] flex-shrink-0" />
              <span className="text-[0.7rem] sm:text-[0.72rem] uppercase tracking-eyebrow font-medium">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}