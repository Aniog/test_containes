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
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 text-brand-muted">
              <item.icon className="h-4 w-4 text-brand-accent" />
              <span className="text-xs uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
