import React from 'react';
import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-hairline">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-0 py-4">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5 text-charcoal">
              <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
              <span className="text-xs font-medium tracking-wide">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
