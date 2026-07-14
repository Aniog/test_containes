import React from 'react';
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const TrustBar = () => {
  const features = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-white border-b border-[#e5e5e5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 text-xs md:text-sm text-[#5c5c5c]"
            >
              <feature.icon size={16} className="text-[#b8860b] flex-shrink-0" />
              <span className="font-medium tracking-wide">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
