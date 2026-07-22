import React from 'react';
import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export function TrustBar() {
  return (
    <section className="bg-espresso text-cream py-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 md:gap-x-12 text-[11px] md:text-xs uppercase tracking-label">
          {TRUST_ITEMS.map((item) => (
            <li key={item.label} className="flex items-center gap-2 text-cream/90">
              <item.icon size={14} className="text-gold" />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
