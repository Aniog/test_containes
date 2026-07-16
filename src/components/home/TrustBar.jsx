import React from 'react';
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-charcoal-900 border-t border-b border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-3">
              <item.icon className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span className="font-sans text-xs tracking-wide text-cream-300">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
