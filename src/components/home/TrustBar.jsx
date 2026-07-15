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
    <div className="bg-brand-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-3 py-4">
              <item.icon size={18} className="text-brand-gold" />
              <span className="text-xs font-sans font-medium tracking-widest uppercase text-white/80">
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
