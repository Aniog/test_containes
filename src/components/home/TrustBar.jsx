import React from "react";
import { Truck, RefreshCcw, Sparkles, ShieldCheck } from "lucide-react";

const ITEMS = [
  { Icon: Truck,        label: "Free Worldwide Shipping" },
  { Icon: RefreshCcw,   label: "30-Day Returns" },
  { Icon: Sparkles,     label: "18K Gold Plated" },
  { Icon: ShieldCheck,  label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="bg-cream-warm border-y border-hairline">
      <div className="container-velmora py-4 sm:py-5">
        <ul className="flex flex-wrap items-center justify-center sm:justify-between gap-y-3 gap-x-6 text-ink">
          {ITEMS.map(({ Icon, label }, i) => (
            <li key={label} className="flex items-center gap-2.5">
              <Icon size={15} strokeWidth={1.4} className="text-gold" />
              <span className="label-eyebrow text-ink text-[0.68rem]">{label}</span>
              {i < ITEMS.length - 1 && (
                <span className="hidden sm:inline-block w-px h-3 bg-hairline ml-3" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
