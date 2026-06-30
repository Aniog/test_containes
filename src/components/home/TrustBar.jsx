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
    <div className="bg-white border-y border-base-sand">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 text-center"
              >
                <feature.icon className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium tracking-wider uppercase text-base-ink">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
