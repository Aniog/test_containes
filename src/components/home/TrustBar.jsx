import React from 'react';
import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';

const trusts = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-charcoal-950 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 sm:gap-x-12">
          {trusts.map((trust) => (
            <div key={trust.label} className="flex items-center gap-2">
              <trust.icon className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-[10px] sm:text-xs tracking-wide uppercase text-brand-300 font-medium">
                {trust.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
