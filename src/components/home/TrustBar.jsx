import React from 'react';
import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

const TrustBar = () => {
  return (
    <div className="border-b border-border bg-surface">
      <div className="section-container">
        <div className="grid grid-cols-2 gap-4 py-4 md:grid-cols-4 md:gap-0 md:divide-x md:divide-border">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2">
              <item.icon className="h-4 w-4 text-accent" />
              <span className="font-ui text-xs font-semibold uppercase tracking-display text-ink-secondary">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
