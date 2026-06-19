import React from 'react';
import { Truck, RefreshCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RefreshCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-[var(--ink)] text-white/90 py-4">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-center md:justify-between gap-6 md:gap-4 overflow-x-auto scrollbar-hide">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 whitespace-nowrap">
              <item.icon className="w-4 h-4 text-[var(--gold-light)]" strokeWidth={1.5} />
              <span className="text-[11px] md:text-xs uppercase tracking-widest font-light">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
