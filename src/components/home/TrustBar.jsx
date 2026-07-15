import React from 'react';
import { Truck, RotateCcw, Sparkles, Heart } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

const TrustBar = () => {
  return (
    <div className="bg-velmora-cream border-b border-velmora-taupe/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-center gap-4 md:gap-12 py-3.5 overflow-x-auto hide-scrollbar">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 whitespace-nowrap">
              <item.icon size={14} className="text-velmora-gold flex-shrink-0" />
              <span className="text-[11px] md:text-xs tracking-wider uppercase text-velmora-warmgray font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
