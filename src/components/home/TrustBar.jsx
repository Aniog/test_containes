import React from 'react';
import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-cream border-b border-velmora-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 md:py-5">
        <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 shrink-0">
              <item.icon className="w-4 h-4 text-velmora-gold" />
              <span className="text-[11px] md:text-xs tracking-wider uppercase text-velmora-stone whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
