import React from 'react';
import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-sand border-y border-velmora-warm/30">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4">
        <div className="flex items-center justify-between md:justify-center gap-4 md:gap-12 overflow-x-auto">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 shrink-0">
              <item.icon className="w-4 h-4 text-velmora-gold" />
              <span className="text-[11px] md:text-xs font-medium tracking-wide text-velmora-brown uppercase whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
