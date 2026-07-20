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
    <div className="border-b border-brand-200 bg-white/70 backdrop-blur-sm">
      <div className="container-custom py-3 md:py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 text-ink-700">
              <item.icon className="h-4 w-4 text-brand-500" />
              <span className="text-xs uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
