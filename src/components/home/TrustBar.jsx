import React from 'react';
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ];

  return (
    <section className="border-y border-charcoal-100/30 bg-cream-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-charcoal-100/30">
          {items.map((item) => (
            <div
              key={item.text}
              className="flex items-center justify-center gap-2.5 py-4 md:py-5"
            >
              <item.icon className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span className="text-xs tracking-wider text-charcoal-600 uppercase font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
