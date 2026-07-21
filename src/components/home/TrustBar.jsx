import React from 'react';
import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

const TrustBar = () => {
  return (
    <div className="bg-espresso py-3">
      <div className="container-main">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-ivory/80"
            >
              <item.icon className="w-4 h-4 text-champagne" strokeWidth={1.5} />
              <span className="text-xs md:text-sm tracking-wide uppercase whitespace-nowrap">
                {item.text}
              </span>
              {index < trustItems.length - 1 && (
                <span className="hidden md:inline text-ivory/30 ml-6">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
