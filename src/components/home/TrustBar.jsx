import React from 'react';
import { Globe, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Globe, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-warm-800 py-4 border-t border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-12">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-3.5 h-3.5 text-gold-light" />
              <span className="font-sans text-[10px] md:text-xs tracking-wider uppercase text-white/60">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
