import React from 'react';
import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-warm border-b border-velmora-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-center gap-8 md:gap-16 overflow-x-auto">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5 flex-shrink-0">
              <Icon className="w-4 h-4 text-velmora-gold" />
              <span className="text-xs font-sans font-medium tracking-wide text-velmora-stone whitespace-nowrap">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
