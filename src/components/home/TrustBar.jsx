import React from 'react';
import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const TrustBar = () => {
  const features = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Gem, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' }
  ];

  return (
    <section className="bg-ivory border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center justify-center gap-2 py-4 px-3"
            >
              <feature.icon className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="font-sans text-xs md:text-sm text-warmGray whitespace-nowrap">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
