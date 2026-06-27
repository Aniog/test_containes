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
    <div className="bg-cream border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2.5 py-3.5 sm:py-4">
              <Icon className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
              <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.15em] uppercase text-warm-gray">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
