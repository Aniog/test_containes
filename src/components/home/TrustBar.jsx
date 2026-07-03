import React from 'react';
import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

const TrustBar = () => {
  return (
    <section className="bg-velmora-sand/50 border-y border-velmora-sand">
      <div className="max-w-[1280px] mx-auto px-6 py-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-velmora-warm-gray"
            >
              <item.icon className="w-4 h-4 text-velmora-gold" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
