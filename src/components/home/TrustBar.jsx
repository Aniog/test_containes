import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
];

const TrustBar = () => {
  return (
    <div className="w-full bg-velmora-ivory border-y border-velmora-sand/40">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 md:py-5">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 md:gap-0">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon className="w-4 h-4 text-velmora-gold" strokeWidth={1.5} />
              <span className="text-xs tracking-wide text-velmora-taupe font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
