import React from 'react';
import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Sparkles, text: '18K Gold Plated' },
    { icon: Shield, text: 'Hypoallergenic' }
  ];

  return (
    <div className="bg-velmora-cream border-y border-velmora-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-velmora-warm-gray">
              <item.icon size={18} className="text-velmora-gold" />
              <span className="uppercase tracking-wide text-xs">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
