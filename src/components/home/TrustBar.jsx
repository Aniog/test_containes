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
    <div className="bg-velmora-charcoal py-4 md:py-5" role="complementary" aria-label="Trust badges">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map(item => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-velmora-gold" aria-hidden="true" />
              <span className="text-xs font-sans font-medium tracking-wider uppercase text-velmora-cream/80">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
