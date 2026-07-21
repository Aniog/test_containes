import React from 'react';
import { Truck, RotateCcw, Shield, Droplets } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Droplets, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="hairline-b bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 py-3 md:py-4 border-r border-pearl-100 last:border-r-0"
            >
              <item.icon className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
              <span className="text-[10px] md:text-xs text-midnight-700 font-medium tracking-wider uppercase whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}