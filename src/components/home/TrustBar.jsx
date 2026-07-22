import React from "react";
import { Truck, RefreshCw, Award, Leaf } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Award, label: "18K Gold Plated" },
  { icon: Leaf, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="border-b border-line bg-sand">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-3 px-5 py-4 sm:px-8 md:grid-cols-4 lg:px-12">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-2 text-center"
          >
            <Icon size={15} className="flex-shrink-0 text-gold" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-luxe text-inkSoft md:text-xs">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
