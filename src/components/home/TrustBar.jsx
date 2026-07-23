import React from "react";
import { Truck, RotateCcw, Gem, Leaf } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: Leaf, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="border-b border-line bg-ivory">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-4 px-5 py-5 sm:px-8 md:grid-cols-4 lg:px-12">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-2.5">
            <Icon size={17} strokeWidth={1.6} className="text-gold-deep" />
            <span className="font-body text-[11px] font-medium uppercase tracking-widest2 text-cocoa">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
