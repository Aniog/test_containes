import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Leaf } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Leaf, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-hairline bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-4 overflow-x-auto gap-6 no-scrollbar">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 whitespace-nowrap flex-shrink-0">
              <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <span className="font-sans text-[11px] uppercase tracking-wider text-text-secondary">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
