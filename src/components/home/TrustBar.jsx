import React from 'react';
import { Truck, RotateCcw, Shield, Gem } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Gem, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-velmora-charcoal border-b border-velmora-gold/10">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5">
          {trustItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2.5 py-1"
            >
              <Icon className="w-4 h-4 text-velmora-gold flex-shrink-0" />
              <span className="font-sans text-caption uppercase tracking-wide text-velmora-cream/70">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
