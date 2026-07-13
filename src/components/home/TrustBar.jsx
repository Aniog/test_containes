import React from 'react';
import { Truck, RotateCcw, Gem, Sparkles } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-dark border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-3.5 flex items-center justify-center md:justify-between flex-wrap gap-x-8 gap-y-2">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-white/40 text-[11px] tracking-wider">
            <item.icon className="w-3 h-3 text-velmora-gold/60" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
