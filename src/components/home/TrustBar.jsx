import React from 'react';
import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Truck, label: 'Free Worldwide Shipping' },
    { icon: RotateCcw, label: '30-Day Returns' },
    { icon: Shield, label: '18K Gold Plated' },
    { icon: Sparkles, label: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-base text-surface border-b border-base-border/60">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-base-border/60">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 py-3 md:py-4">
              <item.icon className="w-4 h-4 text-accent" />
              <span className="text-[11px] md:text-xs font-medium tracking-widest uppercase">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
