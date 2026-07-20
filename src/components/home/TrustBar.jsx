import React from 'react';
import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal text-cream/90">
      <div className="max-w-content mx-auto px-4 md:px-8 py-4 md:py-5">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-3 md:gap-0">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-xs md:text-sm">
              <Icon className="w-4 h-4 text-gold" />
              <span className="uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
