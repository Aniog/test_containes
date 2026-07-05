import React from 'react';
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-[#2C2622] border-t border-[#4A3F37]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-4 flex items-center justify-center gap-6 md:gap-12 flex-wrap">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon size={14} className="text-[#C9A84C]" />
            <span className="text-[10px] md:text-xs tracking-[0.12em] uppercase text-[#E8DFD5]/80 font-medium">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
