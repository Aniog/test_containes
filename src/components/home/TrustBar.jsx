import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: ShieldCheck, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-[var(--warm-white)] border-b border-[var(--cream-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-4">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-[var(--gold)]" />
              <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-[var(--charcoal)]/60">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
