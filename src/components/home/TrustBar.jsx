import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Truck, label: 'Free Worldwide Shipping' },
    { icon: RotateCcw, label: '30-Day Returns' },
    { icon: ShieldCheck, label: '18K Gold Plated' },
    { icon: Sparkles, label: 'Hypoallergenic' },
  ];

  return (
    <div className="border-b border-brand-divider bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 py-4 md:grid-cols-4 md:gap-0 md:divide-x md:divide-brand-divider">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 text-brand-muted">
              <item.icon className="h-4 w-4 text-brand-gold" />
              <span className="text-xs uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
