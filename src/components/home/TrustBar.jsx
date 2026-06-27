import React from 'react';
import { Truck, RefreshCw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RefreshCw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2.5 py-3.5 px-4"
            >
              <item.icon className="w-3.5 h-3.5 text-velmora-gold flex-shrink-0" />
              <span className="text-[11px] tracking-[0.06em] uppercase font-medium text-white/80">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}