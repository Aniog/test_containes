import React from 'react';
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

export default function TrustBar() {
  const features = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-primary text-primary-foreground py-4">
      <div className="container-padding">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <feature.icon className="w-4 h-4 text-accent" />
              <span className="text-xs tracking-wider uppercase">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
