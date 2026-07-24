import React from 'react';
import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

const TrustBar = () => {
  return (
    <div className="bg-velmora-dark text-white py-3 md:py-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-12">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-[11px] md:text-xs uppercase tracking-widest">
              <item.icon size={14} className="text-amber-400" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
