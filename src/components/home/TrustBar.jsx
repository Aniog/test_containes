import React from 'react';
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-[#1A1714] text-white/80 py-4">
      <div className="container-padding">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs md:text-sm tracking-wide">
              <item.icon size={16} className="text-primary flex-shrink-0" strokeWidth={1.5} />
              <span className="font-light">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
