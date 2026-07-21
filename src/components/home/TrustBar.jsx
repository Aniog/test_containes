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
    <div className="border-b border-border bg-surface">
      <div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-4 py-4 text-xs md:text-sm text-muted">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-2">
            <Icon className="h-4 w-4 text-accent" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
