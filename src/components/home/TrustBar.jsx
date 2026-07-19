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
    <div className="bg-white border-b border-divider">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 md:py-5">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-8">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon className="w-4 h-4 text-bronze" strokeWidth={1.5} />
              <span className="text-[11px] md:text-xs uppercase tracking-wider text-warm-gray font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
