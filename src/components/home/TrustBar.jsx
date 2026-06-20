import React from 'react';
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Truck, label: 'Free Worldwide Shipping' },
    { icon: RotateCcw, label: '30-Day Returns' },
    { icon: Shield, label: '18K Gold Plated' },
    { icon: Heart, label: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-cream-dark border-y border-base/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-base/10">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center py-4 md:py-5 px-4"
            >
              <item.icon className="w-4 h-4 text-gold mr-3 flex-shrink-0" />
              <span className="text-xs md:text-sm tracking-wider uppercase text-base/70 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;