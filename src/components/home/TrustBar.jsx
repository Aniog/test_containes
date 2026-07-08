import React from 'react';
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Truck, label: 'Free Worldwide Shipping' },
    { icon: RotateCcw, label: '30-Day Returns' },
    { icon: Shield, label: '18K Gold Plated' },
    { icon: Heart, label: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-white border-b border-brand-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-line">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 py-3 md:py-4">
              <item.icon className="w-4 h-4 text-brand-accent" />
              <span className="text-[11px] md:text-xs tracking-widest uppercase text-brand-muted">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
