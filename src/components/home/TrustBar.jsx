import React from 'react';
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Truck, label: 'Free Worldwide Shipping' },
    { icon: RotateCcw, label: '30-Day Returns' },
    { icon: Gem, label: '18K Gold Plated' },
    { icon: Shield, label: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-stone-950 border-t border-stone-800/50">
      <div className="max-w-7xl mx-auto px-4 py-3.5">
        <div className="flex items-center justify-center gap-6 md:gap-10 overflow-x-auto no-scrollbar">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0">
              <item.icon size={13} strokeWidth={1.5} className="text-gold-400" />
              <span className="font-sans text-[10px] md:text-[11px] text-stone-300 tracking-wide whitespace-nowrap">
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
