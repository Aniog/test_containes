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
    <div className="border-y border-velmora-sand bg-velmora-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-0">
          {items.map((item, idx) => (
            <div key={item.label} className="flex items-center gap-2.5 md:px-8 lg:px-14">
              <item.icon className="w-4 h-4 text-velmora-bronze" strokeWidth={1.5} />
              <span className="text-[11px] md:text-xs font-sans uppercase tracking-[0.1em] text-velmora-warmgray">
                {item.label}
              </span>
              {idx < items.length - 1 && (
                <span className="hidden md:block w-px h-4 bg-velmora-sand ml-8 lg:ml-14" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
