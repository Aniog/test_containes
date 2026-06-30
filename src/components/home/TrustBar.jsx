import React from 'react';
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-espresso border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-4">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 md:gap-0">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-velmora-cream/70">
              <item.icon className="w-3.5 h-3.5 text-velmora-gold/70" />
              <span className="text-[11px] font-sans tracking-wider uppercase">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
