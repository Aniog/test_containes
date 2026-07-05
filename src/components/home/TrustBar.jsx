import React from 'react';
import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-warm-white py-4 border-y border-velmora-border">
      <div className="container-luxury">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <item.icon size={18} className="text-velmora-gold" />
              <span className="uppercase tracking-wider text-xs">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
