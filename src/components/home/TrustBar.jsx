import React from 'react';
import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const features = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-brand-charcoal border-b border-brand-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 md:py-5">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center justify-center gap-2.5 text-white/70"
            >
              <feature.icon className="w-4 h-4 text-brand-gold-light flex-shrink-0" />
              <span className="text-xs font-medium tracking-wide">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
