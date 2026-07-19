import React from 'react';
import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

const TrustBar = () => {
  return (
    <section className="bg-velmora-espresso text-white py-4 md:py-5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-12">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="w-3.5 h-3.5 text-velmora-gold" />
              <span className="font-sans text-[11px] md:text-xs tracking-widest uppercase text-white/80">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
