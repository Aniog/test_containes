import React from "react";
import { Truck, RotateCcw, Sparkles, ShieldCheck } from "lucide-react";

const items = [
  { Icon: Truck, title: "Free Worldwide Shipping", sub: "On orders over $75" },
  { Icon: RotateCcw, title: "30-Day Returns", sub: "Easy & complimentary" },
  { Icon: Sparkles, title: "18K Gold Plated", sub: "Hand-finished, demi-fine" },
  { Icon: ShieldCheck, title: "Hypoallergenic", sub: "Made for everyday skin" },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Our promise"
      className="bg-cream-100 border-y border-hairline/70"
    >
      <div className="mx-auto max-w-editorial px-4 sm:px-6 lg:px-10">
        <ul className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-hairline/70">
          {items.map(({ Icon, title, sub }) => (
            <li
              key={title}
              className="flex items-center justify-center gap-3 py-5 sm:py-6 px-3 text-center"
            >
              <Icon className="w-5 h-5 text-gold-500 flex-none" strokeWidth={1.25} />
              <div className="text-left">
                <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-ink-800">
                  {title}
                </p>
                <p className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-muted-500 mt-0.5">
                  {sub}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
