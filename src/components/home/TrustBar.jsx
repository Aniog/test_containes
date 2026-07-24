import React from 'react';
import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
];

const TrustBar = () => {
  return (
    <div className="bg-velmora-ink py-4">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-center gap-8 lg:gap-16 overflow-x-auto">
          {items.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2.5 flex-shrink-0"
            >
              <item.icon className="w-4 h-4 text-velmora-gold" />
              <span className="text-xs uppercase tracking-wider text-velmora-stone whitespace-nowrap">
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
