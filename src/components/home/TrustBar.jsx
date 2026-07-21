import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-border bg-surface">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 md:py-5">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 text-foreground-muted"
            >
              <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-[11px] md:text-xs tracking-wider uppercase font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}