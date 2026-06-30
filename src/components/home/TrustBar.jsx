import React from 'react';
import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const TrustBar = () => {
  const features = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Gem, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-cream-200/50 border-y border-charcoal-200/50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-charcoal-200/50">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 py-4 md:py-5 px-4 md:px-6"
            >
              <feature.icon className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-[11px] md:text-xs uppercase tracking-[0.1em] text-charcoal-700 whitespace-nowrap">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
