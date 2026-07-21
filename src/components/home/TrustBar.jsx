import React from 'react';
import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';

const ITEMS = [
  { Icon: Truck, label: 'Free Worldwide Shipping' },
  { Icon: RotateCcw, label: '30-Day Returns' },
  { Icon: Sparkles, label: '18K Gold Plated' },
  { Icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="border-b border-hairline bg-cream" aria-label="Our promises">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ul className="grid grid-cols-2 gap-y-4 py-6 md:grid-cols-4 md:py-7">
          {ITEMS.map(({ Icon, label }, index) => (
            <li
              key={label}
              className={`flex items-center justify-center gap-2.5 ${
                index > 0 ? 'md:border-l md:border-hairline' : ''
              }`}
            >
              <Icon className="h-4 w-4 shrink-0 text-bronze" strokeWidth={1.5} aria-hidden="true" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cocoa md:text-[11px]">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
