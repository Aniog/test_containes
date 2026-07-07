import React from 'react';
import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-cream border-y border-gold/20 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <item.icon size={20} className="text-gold" strokeWidth={1.5} />
              <span className="text-sm tracking-wide text-charcoal/80">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
