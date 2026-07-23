import React from 'react';
import { Truck, RefreshCw, ShieldCheck, Sparkles } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="border-b border-warm-gray bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:flex md:items-center md:justify-between">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 text-ink"
            >
              <item.icon size={16} className="text-gold" />
              <span className="text-[10px] uppercase tracking-widest sm:text-xs">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
