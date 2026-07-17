import React from 'react';
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-divider bg-surface/50">
      <div className="section-padding py-3.5 max-w-[1440px] mx-auto">
        <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto scrollbar-hide">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 flex-shrink-0">
              <item.icon size={14} strokeWidth={1.5} className="text-gold" />
              <span className="text-[11px] tracking-wider uppercase text-cream-muted whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
