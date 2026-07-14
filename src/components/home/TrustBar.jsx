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
    <section className="bg-velmora-cream-dark border-y border-velmora-divider">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className={`flex items-center justify-center gap-2.5 py-1 ${
                i < trustItems.length - 1 ? 'md:border-r md:border-velmora-divider' : ''
              }`}
            >
              <item.icon className="w-4 h-4 text-velmora-gold" strokeWidth={1.5} />
              <span className="text-xs md:text-[13px] font-sans text-velmora-muted tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
