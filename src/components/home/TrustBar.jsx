import React from 'react';
import { Sparkles, Truck, RefreshCcw, Heart } from 'lucide-react';
import { TRUST } from '@/data/products';

// Map index to icon
const ICONS = [Truck, RefreshCcw, Sparkles, Heart];

export default function TrustBar() {
  return (
    <section className="bg-cream border-y border-hairline">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-5 md:py-6">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8 items-center justify-items-center md:justify-items-start">
          {TRUST.map((item, i) => {
            const Icon = ICONS[i] || Sparkles;
            return (
              <li
                key={item.label}
                className="flex items-center gap-3 text-charcoal"
              >
                <Icon className="w-[14px] h-[14px] text-gold flex-shrink-0" strokeWidth={1.5} />
                <span className="text-[0.72rem] md:text-[0.78rem] tracking-[0.12em] uppercase font-medium text-charcoal whitespace-nowrap">
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}