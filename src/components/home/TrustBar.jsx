import React from 'react';
import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: "Free Worldwide Shipping" },
  { icon: RotateCcw, text: "30-Day Returns" },
  { icon: Sparkles, text: "18K Gold Plated" },
  { icon: Shield, text: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="bg-gold-light border-y border-hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-3 md:py-4">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-gold" />
              <span className="text-xs md:text-sm font-sans text-charcoal/80 whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
