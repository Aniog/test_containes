import React from 'react';
import { Truck, RotateCcw, Sparkles, Leaf } from 'lucide-react';

const ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Leaf, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="border-y border-hairline bg-ivory">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-3 px-6 py-5 sm:grid-cols-4 md:px-10 md:py-6">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-3 text-ink"
          >
            <Icon size={16} strokeWidth={1.5} className="text-champagne-deep" />
            <span className="text-[10px] uppercase tracking-[0.28em] md:text-[11px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
