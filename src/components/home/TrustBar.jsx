import React from 'react';
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-[var(--velmora-bg-dark)] text-white/80 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 lg:gap-16">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-[var(--velmora-accent)]" />
              <span className="text-xs tracking-wider uppercase">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
