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
    <section
      className="py-4 border-y"
      style={{ 
        backgroundColor: 'var(--color-warm-white)',
        borderColor: 'var(--color-sand)'
      }}
    >
      <div className="container-luxury">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm"
              style={{ color: 'var(--color-walnut)' }}
            >
              <feature.icon className="w-4 h-4" style={{ color: 'var(--color-gold)' }} />
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
