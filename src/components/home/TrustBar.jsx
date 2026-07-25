import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Droplets } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: ShieldCheck, text: '18K Gold Plated' },
  { icon: Droplets, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-ink-900/5 border-y border-ink-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-between py-3.5 gap-6 md:gap-0 overflow-x-auto">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-ink-600 whitespace-nowrap"
            >
              <item.icon className="w-3.5 h-3.5 text-gold-500" />
              <span className="text-[11px] font-sans font-medium tracking-wider uppercase">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}