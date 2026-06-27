import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-cream-dark border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 py-4 md:py-5"
            >
              <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-[11px] md:text-xs tracking-[0.15em] uppercase text-charcoal font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
