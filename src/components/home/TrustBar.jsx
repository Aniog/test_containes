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
    <div className="bg-brand-charcoal py-4 md:py-5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-brand-gold" />
              <span className="font-sans text-[11px] md:text-xs uppercase tracking-wide text-white/80">
                {item.label}
              </span>
              {i < trustItems.length - 1 && (
                <span className="hidden md:inline text-white/20 ml-8">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
