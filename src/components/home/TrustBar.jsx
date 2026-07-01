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
    <section className="bg-velmora-base py-4 border-b border-velmora-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-velmora-stone-light">
              <feature.icon size={16} className="text-velmora-gold" />
              <span className="text-xs tracking-wide">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
