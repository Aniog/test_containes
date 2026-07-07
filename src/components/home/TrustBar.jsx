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
    <section className="bg-velmora-deep text-white/80 py-4 md:py-5">
      <div className="section-container">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-16">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <item.icon className="w-4 h-4 text-velmora-gold" strokeWidth={1.5} />
              <span className="font-sans text-xs tracking-wider uppercase">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
