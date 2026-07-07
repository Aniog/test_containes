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
    <div className="border-b border-charcoal-200 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-3 overflow-x-auto">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 whitespace-nowrap">
              <Icon className="w-3.5 h-3.5 text-charcoal-500" strokeWidth={1.5} />
              <span className="text-[11px] uppercase tracking-wide text-charcoal-600">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
