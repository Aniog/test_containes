import React from 'react';
import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-primary text-dark-text py-3.5 border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto hide-scrollbar">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 flex-shrink-0"
            >
              <Icon size={14} className="text-star" strokeWidth={1.5} />
              <span className="text-[11px] md:text-xs font-sans font-medium uppercase tracking-wider whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
