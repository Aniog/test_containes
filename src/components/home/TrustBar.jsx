import React from 'react';
import { Truck, RefreshCw, Gem, Heart } from 'lucide-react';

const TrustBar = () => {
  const trustItems = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RefreshCw, text: '30-Day Returns' },
    { icon: Gem, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-cream-100 border-y border-gold-200">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center space-x-3 py-4 px-2"
            >
              <item.icon className="w-5 h-5 text-gold-600 flex-shrink-0" />
              <span className="text-xs md:text-sm text-charcoal-700 text-center font-sans tracking-wide">
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