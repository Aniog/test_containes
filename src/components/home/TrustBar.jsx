import React from 'react';
import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const features = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-warm-900 border-y border-warm-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 md:py-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="flex items-center justify-center gap-2.5 py-1">
                <Icon size={16} strokeWidth={1.5} className="text-gold flex-shrink-0" />
                <span className="font-sans text-[11px] md:text-xs tracking-[0.1em] uppercase text-warm-300 whitespace-nowrap">
                  {feature.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
