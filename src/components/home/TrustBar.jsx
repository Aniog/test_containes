import React from 'react';
import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { Icon: Truck, label: 'Free Worldwide Shipping' },
  { Icon: RotateCcw, label: '30-Day Returns' },
  { Icon: Gem, label: '18K Gold Plated' },
  { Icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="border-y border-umber bg-onyx/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-4 px-5 py-5 md:grid-cols-4 md:px-10">
        {items.map(({ Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-2.5">
            <Icon className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
            <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-sand md:text-[11px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
