import React from 'react';
import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export function TrustBar() {
  return (
    <div className="border-b border-hairline bg-cream">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-6 px-4 py-4 md:gap-12 md:py-5">
        {TRUST_ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-ink">
            <item.icon size={16} strokeWidth={1.5} className="text-gold" />
            <span className="font-sans text-[11px] font-medium uppercase tracking-wider md:text-xs">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
