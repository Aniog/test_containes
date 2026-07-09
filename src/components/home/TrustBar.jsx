import React from 'react';
import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const trusts = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-cream border-y border-velmora-100">
      <div className="container-wide">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-4 overflow-x-auto scrollbar-hide">
          {trusts.map((trust, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0">
              <trust.icon size={16} className="text-gold" />
              <span className="text-xs md:text-[13px] text-velmora-500 whitespace-nowrap tracking-wide">
                {trust.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
