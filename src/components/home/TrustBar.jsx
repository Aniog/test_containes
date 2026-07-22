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
    <section className="bg-velmora-dark border-y border-velmora-border py-6">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 text-velmora-muted">
              <feature.icon className="w-5 h-5 text-velmora-gold" />
              <span className="text-sm uppercase tracking-wider">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;