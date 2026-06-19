import React from 'react';
import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-brand-sand/60 border-y border-brand-warmgray/20">
      <div className="section-padding py-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-2.5">
              <item.icon size={16} strokeWidth={1.5} className="text-brand-gold flex-shrink-0" />
              <span className="text-[11px] sm:text-xs tracking-[0.1em] uppercase text-brand-mid-brown font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
