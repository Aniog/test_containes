import React from "react";
import { Truck, RotateCcw, Crown, ShieldCheck } from "lucide-react";

const items = [
  { icon: Truck, text: "Free Worldwide Shipping" },
  { icon: RotateCcw, text: "30-Day Returns" },
  { icon: Crown, text: "18K Gold Plated" },
  { icon: ShieldCheck, text: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-cream border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-10">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-stone-600">
              <item.icon className="w-4 h-4 text-velmora-gold" strokeWidth={1.5} />
              <span className="text-xs sm:text-sm tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
