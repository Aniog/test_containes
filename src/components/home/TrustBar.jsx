import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
];

const TrustBar = () => {
  return (
    <div className="border-b border-base-200 bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2.5">
              <Icon className="h-4 w-4 text-gold-600" />
              <span className="text-xs font-medium tracking-wide text-ink/70">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
