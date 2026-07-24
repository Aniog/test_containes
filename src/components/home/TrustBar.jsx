import React from "react";
import { Gem, Globe2, Leaf, RefreshCcw } from "lucide-react";

const ITEMS = [
  { Icon: Globe2, label: "Free Worldwide Shipping" },
  { Icon: RefreshCcw, label: "30-Day Returns" },
  { Icon: Gem, label: "18K Gold Plated" },
  { Icon: Leaf, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-line bg-sand">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-4 px-5 py-5 md:grid-cols-4 md:px-8">
        {ITEMS.map(({ Icon, label }, i) => (
          <div
            key={label}
            className={
              "flex items-center justify-center gap-2.5 text-espresso " +
              (i > 0 ? "md:border-l md:border-line" : "")
            }
          >
            <Icon size={16} strokeWidth={1.25} className="shrink-0 text-gold" />
            <span className="text-[10px] font-medium uppercase tracking-widest2 md:text-[11px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
