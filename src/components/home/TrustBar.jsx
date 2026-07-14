import React from 'react';
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-y border-border bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 md:py-5">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2.5"
            >
              <Icon className="w-4 h-4 text-gold flex-shrink-0" strokeWidth={1.5} />
              <span className="font-sans text-[11px] uppercase tracking-widest text-muted">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
