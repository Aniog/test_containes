import React from 'react';
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-cream-dark border-y border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(item => (
            <div key={item.text} className="flex items-center justify-center gap-2.5">
              <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-[11px] md:text-xs font-sans text-charcoal-light tracking-wide">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
