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
    <div className="bg-cream-100 border-b border-warm-200">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4">
        <div className="flex items-center justify-center md:justify-between gap-6 overflow-x-auto hide-scrollbar">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5 flex-shrink-0">
              <Icon className="w-4 h-4 text-gold-500" strokeWidth={1.5} />
              <span className="text-xs tracking-[0.1em] uppercase text-warm-600 whitespace-nowrap">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
