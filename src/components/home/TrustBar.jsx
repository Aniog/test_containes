import React from 'react';
import { Globe, RotateCcw, Gem, Shield } from 'lucide-react';

const trustItems = [
  { icon: Globe, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-cream-100 border-y border-cream-300/40">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center justify-center gap-2.5 py-1">
                <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                <span className="font-sans text-caption text-charcoal-muted tracking-wide whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
