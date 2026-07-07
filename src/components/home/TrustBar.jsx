import React from 'react';
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const features = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-surface-ivory border-y border-brand-gold/10">
      <div className="section-padding py-4 lg:py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 lg:gap-x-16">
          {features.map((feature) => (
            <div key={feature.label} className="flex items-center gap-2">
              <feature.icon size={14} className="text-brand-gold" />
              <span className="font-sans text-caption text-text-dark-secondary tracking-wide">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
