import React from "react";
import { Truck, RotateCcw, Shield, Heart } from "lucide-react";

const trustItems = [
  { icon: Truck, text: "Free Worldwide Shipping" },
  { icon: RotateCcw, text: "30-Day Returns" },
  { icon: Shield, text: "18K Gold Plated" },
  { icon: Heart, text: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-warm-white border-y border-velmora-sand/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.text}
                className="flex items-center justify-center gap-2.5 py-4 md:py-5 border-r border-velmora-sand/10 last:border-r-0"
              >
                <Icon className="w-4 h-4 text-velmora-gold flex-shrink-0" />
                <span className="text-xs md:text-sm text-velmora-pewter font-medium whitespace-nowrap">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}