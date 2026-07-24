import React from "react";
import { Truck, RotateCcw, Gem, Shield } from "lucide-react";

const trustItems = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: Shield, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="bg-ivory border-y border-sand/50">
      <div className="max-w-[1400px] mx-auto px-4 py-4 sm:py-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 sm:gap-3"
            >
              <item.icon size={16} className="text-gold flex-shrink-0" />
              <span className="text-[10px] sm:text-xs tracking-[0.1em] uppercase font-medium text-charcoal/80">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
