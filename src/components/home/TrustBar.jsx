import React from 'react';
import { Truck, RotateCcw, Gem, Leaf } from 'lucide-react';

const benefits = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Leaf, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-border bg-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-y-3 px-4 py-3 sm:px-6 lg:px-8">
        {benefits.map((benefit, index) => (
          <React.Fragment key={benefit.label}>
            <div className="flex items-center gap-2 px-4 py-1">
              <benefit.icon size={14} className="text-gold" />
              <span className="whitespace-nowrap font-sans text-[11px] font-medium uppercase tracking-widest text-taupe">
                {benefit.label}
              </span>
            </div>
            {index < benefits.length - 1 && (
              <span className="hidden h-3 w-px bg-border md:block" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
