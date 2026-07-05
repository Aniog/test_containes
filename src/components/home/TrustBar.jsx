import React from 'react';
import { Truck, RotateCcw, Award, Heart } from 'lucide-react';

const TrustBar = () => {
  const features = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Award, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' }
  ];

  return (
    <div className="bg-charcoal py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 text-cream/80"
            >
              <feature.icon size={18} strokeWidth={1.5} />
              <span className="text-xs md:text-sm tracking-wide">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;