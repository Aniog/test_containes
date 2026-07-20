import React from 'react';
import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Sparkles, text: '18K Gold Plated' },
    { icon: ShieldCheck, text: 'Hypoallergenic' }
  ];

  return (
    <div className="bg-brand-surface border-b border-brand-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-xs md:text-sm text-brand-muted">
              <item.icon className="h-4 w-4 text-brand-accent" />
              <span className="tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
