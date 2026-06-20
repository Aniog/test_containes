import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Truck, label: 'Free Worldwide Shipping' },
    { icon: RotateCcw, label: '30-Day Returns' },
    { icon: ShieldCheck, label: '18K Gold Plated' },
    { icon: Heart, label: 'Hypoallergenic' },
  ];

  return (
    <div className="border-b border-brand-border bg-brand-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-3 md:gap-10 md:py-4">
        {items.map(({ icon: Icon, label }) => (
          <span key={label} className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-black/70">
            <Icon className="h-4 w-4 text-brand-gold" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
