import React from 'react';
import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-stone-900 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon size={14} className="text-gold" strokeWidth={1.5} />
              <span className="text-[11px] tracking-wider uppercase text-stone-300 font-sans font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
