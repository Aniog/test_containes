import React from "react";
import { Truck, RefreshCw, Sparkles, ShieldCheck } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="border-y border-ink-800/10 bg-ivory-100">
      <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 py-3 sm:gap-x-10 sm:px-8 lg:px-12">
        {items.map((it, i) => (
          <li
            key={it.label}
            className="flex items-center gap-2 text-[11px] font-sans uppercase tracking-widest2 text-ink-700"
          >
            <it.icon className="h-3.5 w-3.5 text-gold-500" strokeWidth={1.6} />
            <span>{it.label}</span>
            {i < items.length - 1 && (
              <span aria-hidden className="ml-6 hidden h-3 w-px bg-ink-800/15 sm:inline-block" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
