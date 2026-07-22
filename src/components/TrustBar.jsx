import React from 'react';
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { icon: Truck, label: 'Free Worldwide Shipping' },
    { icon: RotateCcw, label: '30-Day Returns' },
    { icon: Shield, label: '18K Gold Plated' },
    { icon: Heart, label: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-velmora-ink py-4 md:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-16">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <item.icon className="w-4 h-4 text-velmora-gold" />
              <span className="font-sans text-xs md:text-sm text-white/80 tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}