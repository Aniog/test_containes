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
    <div className="bg-velmora-cream border-y border-velmora-sand/20">
      <div className="section-padding py-4">
        <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto no-scrollbar">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 whitespace-nowrap flex-shrink-0">
              <item.icon className="w-3.5 h-3.5 text-gold" />
              <span className="font-sans text-[11px] uppercase tracking-wider text-velmora-stone">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
