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
    <section className="bg-charcoal py-4 border-b border-stone-800">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon size={14} className="text-gold-muted" />
              <span className="text-xs uppercase tracking-widest text-stone-400 font-sans">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
