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
    <section className="border-y border-border bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-center justify-between md:justify-center gap-4 md:gap-14 py-4 overflow-x-auto">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5 shrink-0">
              <item.icon size={16} className="text-gold" strokeWidth={1.5} />
              <span className="text-[11px] md:text-xs font-medium tracking-wide text-dark whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
