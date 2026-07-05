import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
];

const TrustBar = () => {
  return (
    <div className="border-b border-brand-line bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-line">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 py-3">
              <item.icon className="h-4 w-4 text-brand-accent" />
              <span className="text-xs font-sans font-medium tracking-wide text-brand-ink">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
