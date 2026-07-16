import React from 'react';
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="border-y border-border bg-base/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
          {trustItems.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center justify-center gap-2.5 ${
                i < trustItems.length - 1 ? 'lg:border-r lg:border-border' : ''
              }`}
            >
              <item.icon size={16} className="text-gold flex-shrink-0" />
              <span className="text-[11px] sm:text-xs tracking-wider uppercase text-text-muted font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
