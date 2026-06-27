import React from 'react';
import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';

const ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-cream border-b border-hairline">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-5">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 text-ink">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center justify-center gap-3">
              <Icon className="w-4 h-4 text-gold-deep" strokeWidth={1.5} />
              <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-ink">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
