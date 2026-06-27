import React from 'react';
import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

const TrustBar = () => {
  return (
    <div className="border-b border-velmora-border bg-velmora-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2.5 text-velmora-charcoal/80">
              <item.icon className="w-4 h-4 text-velmora-gold" />
              <span className="text-xs uppercase tracking-[0.15em]">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
