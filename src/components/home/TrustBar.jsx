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
    <div className="bg-cream border-y border-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 md:py-5">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2 md:gap-3">
              <Icon className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-[11px] md:text-xs text-taupe tracking-wider uppercase font-sans font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
