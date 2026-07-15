import React from 'react';
import { Truck, RotateCcw, Shield, Gem } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-charcoal-800 border-t border-b border-charcoal-700">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-charcoal-700">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 py-4 md:py-5 px-4"
            >
              <item.icon className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span className="text-body-sm text-cream-300 tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
