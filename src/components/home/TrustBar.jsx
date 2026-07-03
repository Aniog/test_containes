import React from 'react';
import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Truck, label: 'Free Worldwide Shipping' },
    { icon: RotateCcw, label: '30-Day Returns' },
    { icon: Sparkles, label: '18K Gold Plated' },
    { icon: ShieldCheck, label: 'Hypoallergenic' },
  ];

  return (
    <div className="border-b border-brand-line bg-brand-surface">
      <div className="container-narrow">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3 py-3 md:py-4">
              <item.icon className="h-4 w-4 text-brand-accent" />
              <span className="text-xs font-medium tracking-wide text-brand-ink">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
