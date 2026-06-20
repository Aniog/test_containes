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
    <div className="border-b border-base-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest text-base-600 md:text-sm">
              <Icon className="h-4 w-4 text-accent" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
