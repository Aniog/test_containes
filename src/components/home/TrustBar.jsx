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
    <section className="bg-charcoal py-4 border-t border-b border-gold/20">
      <div className="section-padding flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-16">
          {trustItems.map((item, i) => (
            <React.Fragment key={item.label}>
              <div className="flex items-center gap-2.5">
                <item.icon size={14} className="text-gold" strokeWidth={1.5} />
                <span className="font-sans text-overline uppercase tracking-ultra-wide text-white/80">
                  {item.label}
                </span>
              </div>
              {i < trustItems.length - 1 && (
                <div className="hidden md:block w-px h-3 bg-white/20" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
