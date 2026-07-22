import React from "react";
import { Truck, RefreshCw, Gem, ShieldCheck } from "lucide-react";

const trustItems = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="border-b border-brand-charcoal/10 bg-brand-ivory">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-4 lg:justify-between lg:px-10">
        {trustItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-brand-charcoal/80"
          >
            <item.icon className="h-4 w-4 text-brand-rose-dark" />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
