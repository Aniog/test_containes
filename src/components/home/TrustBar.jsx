import React from 'react';
import { Truck, RotateCcw, Award, Heart } from 'lucide-react';

const TrustBar = () => {
  const trustItems = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Award, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' }
  ];

  return (
    <section className="bg-[var(--color-ivory)] py-4 md:py-5">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 text-[var(--color-text-secondary)]"
            >
              <item.icon className="w-4 h-4" />
              <span className="font-sans text-xs md:text-sm tracking-wide">
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