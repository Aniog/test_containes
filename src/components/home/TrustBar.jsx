import React from 'react';
import { Truck, RotateCcw, Crown, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Crown, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-border">
      <div className="mx-auto max-w-page px-4 md:px-8 lg:px-12 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-10">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-gold" />
              <span className="text-xs font-sans text-muted tracking-wide">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
