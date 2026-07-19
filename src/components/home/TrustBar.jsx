import React from 'react';
import { Truck, RotateCcw, Sparkles, Leaf } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { icon: Truck, label: 'Free Worldwide Shipping' },
    { icon: RotateCcw, label: '30-Day Returns' },
    { icon: Sparkles, label: '18K Gold Plated' },
    { icon: Leaf, label: 'Hypoallergenic' },
  ];

  return (
    <section className="border-b border-hairline bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:flex md:items-center md:justify-between">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 md:gap-3">
              <item.icon size={16} className="text-accent" />
              <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-foreground/90 md:text-xs">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
