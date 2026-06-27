import React from 'react';
import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Sparkles, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-charcoal py-4 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2.5">
              <item.icon size={14} className="text-gold" strokeWidth={1.5} />
              <span className="text-cream/70 text-[11px] tracking-[0.12em] uppercase whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
