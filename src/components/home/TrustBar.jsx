import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal-800 text-cream-50/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between py-4 md:py-5 overflow-x-auto gap-6 hide-scrollbar">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5 shrink-0">
              <item.icon className="w-4 h-4 text-gold" />
              <span className="text-xs md:text-sm font-sans font-medium tracking-wider uppercase whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}