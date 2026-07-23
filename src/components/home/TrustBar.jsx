import React from 'react';
import { Truck, RotateCcw, CircleDot, Heart } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: CircleDot, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-ink text-warm-white/90">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between py-4 md:py-5 overflow-x-auto hide-scrollbar gap-6 md:gap-0">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <item.icon className="w-4 h-4 text-gold" />
              <span className="text-[11px] md:text-xs tracking-[0.1em] uppercase whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
