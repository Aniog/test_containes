import React from 'react';
import { Shield, Truck, RotateCcw, Sparkles } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="border-y border-velvet-border bg-velvet-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-3 md:py-4 overflow-x-auto scrollbar-hide gap-6">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-velvet-taupe whitespace-nowrap">
              <item.icon className="w-3.5 h-3.5 text-velvet-gold" />
              <span className="text-[11px] md:text-xs tracking-wider uppercase font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}