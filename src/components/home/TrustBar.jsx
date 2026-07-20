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
    <div className="bg-[var(--velmora-dark)] text-white/80 py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {trustItems.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-xs tracking-wider uppercase">
            <item.icon size={14} className="text-[var(--velmora-gold)]" />
            <span className="hidden sm:inline">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
