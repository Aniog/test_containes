import React from "react";
import { Truck, RefreshCw, Sparkles, ShieldCheck } from "lucide-react";
import { TRUST_BADGES } from "@/data/content";

const ICONS = [Truck, RefreshCw, Sparkles, ShieldCheck];

export default function TrustBar() {
  return (
    <section
      aria-label="Trust and promises"
      className="border-y border-hairline bg-ivory"
    >
      <div className="container-editorial">
        <ul className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-hairline">
          {TRUST_BADGES.map((label, i) => {
            const Icon = ICONS[i] || Sparkles;
            return (
              <li
                key={label}
                className="flex items-center justify-center gap-3 py-5 md:py-6 px-4 text-center"
              >
                <Icon className="w-4 h-4 text-gold-deep flex-shrink-0" strokeWidth={1.5} />
                <span className="text-[11px] md:text-[12px] uppercase tracking-[0.22em] text-ink font-medium">
                  {label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
