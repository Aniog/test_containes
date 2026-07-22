import React from 'react';
import { Truck, RotateCcw, Award, Heart } from 'lucide-react';

const TrustBar = () => {
  const features = [
    { icon: Truck, label: 'Free Worldwide Shipping' },
    { icon: RotateCcw, label: '30-Day Returns' },
    { icon: Award, label: '18K Gold Plated' },
    { icon: Heart, label: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-cream-100 border-y border-cream-200">
      <div className="container-luxury py-4">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-charcoal-600"
            >
              <feature.icon className="w-4 h-4 text-gold-600" />
              <span className="text-xs font-sans font-medium tracking-wide uppercase whitespace-nowrap">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
