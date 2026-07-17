import React from 'react';
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-velmora-ivory border-y border-hairline border-velmora-light/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-3">
              <item.icon className="w-4 h-4 text-velmora-gold flex-shrink-0" strokeWidth={1.5} />
              <span className="font-sans text-caption uppercase tracking-[0.1em] text-velmora-gray">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
