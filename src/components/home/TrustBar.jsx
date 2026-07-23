import React from 'react';
import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const TrustBar = () => {
  const trustItems = [
    {
      icon: <Truck size={20} />,
      text: "Free Worldwide Shipping",
    },
    {
      icon: <RotateCcw size={20} />,
      text: "30-Day Returns",
    },
    {
      icon: <Sparkles size={20} />,
      text: "18K Gold Plated",
    },
    {
      icon: <Shield size={20} />,
      text: "Hypoallergenic",
    },
  ];

  return (
    <section className="bg-velmora-warm py-6 border-y border-velmora-sand">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-sm font-sans uppercase tracking-wider text-velmora-charcoal"
            >
              <span className="text-velmora-gold">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
