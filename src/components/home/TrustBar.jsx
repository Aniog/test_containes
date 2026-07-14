import React from 'react';
import { Truck, RefreshCw, Sparkles, Shield } from 'lucide-react';

const TrustBar = () => {
  const trustItems = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RefreshCw, text: '30-Day Returns' },
    { icon: Sparkles, text: '18K Gold Plated' },
    { icon: Shield, text: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-velmora-cream border-b border-velmora-light-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 md:space-x-3">
              <item.icon className="w-4 h-4 md:w-5 md:h-5 text-velmora-gold" />
              <span className="text-xs md:text-sm text-velmora-charcoal tracking-wide">
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
