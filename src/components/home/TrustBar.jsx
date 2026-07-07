import React from 'react';
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';
import RevealSection from '@/components/RevealSection';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <RevealSection>
      <div className="bg-brand-espresso py-4 md:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-brand-gold" />
                <span className="font-sans text-[11px] md:text-xs tracking-wide text-brand-cream/80 uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
