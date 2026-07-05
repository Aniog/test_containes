import React from 'react';
import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-charcoal/30 border-y border-charcoal/30">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x divide-charcoal/40">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2.5 py-1">
              <Icon size={15} className="text-gold/70" strokeWidth={1.5} />
              <span className="text-[11px] sm:text-xs tracking-[0.1em] text-muted/70 uppercase">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
