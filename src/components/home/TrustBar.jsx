import React from 'react';
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-warm-charcoal border-y border-warm-dark">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <item.icon className="w-4 h-4 text-gold" />
            <span className="text-[11px] md:text-xs font-sans font-medium uppercase tracking-[0.1em] text-warm-sand">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
