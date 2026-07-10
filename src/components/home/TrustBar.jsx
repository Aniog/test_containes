import React from 'react';
import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-ivory border-y border-taupe">
      <div className="container-main py-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-0">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-stone"
            >
              <item.icon size={18} strokeWidth={1.5} className="text-gold" />
              <span className="font-sans text-sm whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
