import React from 'react';
import { Truck, RefreshCw, Shield, Heart } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RefreshCw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-warm border-y border-sand/30">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-3.5">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-mocha/70">
              <item.icon className="w-3.5 h-3.5 text-gold" />
              <span className="text-[11px] tracking-wider uppercase">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
