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
    <div className="bg-velmora-cream border-y border-velmora-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-velmora-sand">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 py-4 px-4"
            >
              <item.icon size={18} className="text-velmora-gold flex-shrink-0" />
              <span className="text-xs md:text-sm text-velmora-espresso whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
