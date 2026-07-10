import React from 'react';
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

const TrustBar = () => {
  return (
    <div className="bg-brand-onyx text-white py-3.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-[11px] tracking-extra-wide uppercase font-sans text-white/80">
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
