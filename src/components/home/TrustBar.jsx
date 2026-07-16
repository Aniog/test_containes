import React from 'react';
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal text-cream/80">
      <div className="container-page py-3 md:py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-14">
        {items.map((item) => (
          <div
            key={item.text}
            className="flex items-center gap-2"
          >
            <item.icon className="w-3.5 h-3.5 text-gold-light flex-shrink-0" />
            <span className="text-[10px] md:text-[11px] font-sans uppercase tracking-wider whitespace-nowrap">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
