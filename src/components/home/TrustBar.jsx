import React from 'react';
import { Truck, RefreshCcw, Gem, ShieldCheck } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-hairline bg-cream-50">
      <div className="mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 py-4 md:py-5">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 md:gap-3 text-ink"
            >
              <item.icon size={18} className="text-gold" strokeWidth={1.5} />
              <span className="font-sans text-[11px] md:text-xs tracking-wide uppercase font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
