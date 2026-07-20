import React from 'react';
import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

const TrustBar = () => (
  <div className="bg-stone-900 text-stone-300 py-3 border-b border-stone-800">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-xs md:text-sm">
            <Icon size={16} className="text-gold-400" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBar;
