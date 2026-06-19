import React from 'react';
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-3 text-charcoal/70">
              <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-[11px] uppercase tracking-[0.15em] font-sans whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="hairline" />
    </div>
  );
}