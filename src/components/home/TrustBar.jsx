import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Leaf } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Leaf, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-near-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2.5 py-4 md:py-5 bg-near-black"
            >
              <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-[11px] md:text-xs text-taupe-light uppercase tracking-wider font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}