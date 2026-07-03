import React from 'react';
import { Truck, RotateCcw, Crown, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Crown, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-surface-muted border-b border-border">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-4 md:py-5">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
              <span className="text-[11px] md:text-xs tracking-[0.1em] uppercase text-foreground/80">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
