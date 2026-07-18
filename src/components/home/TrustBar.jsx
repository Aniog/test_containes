import React from 'react';
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Gem, text: '18K Gold Plated' },
    { icon: Shield, text: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-surface-secondary border-y border-gold/8">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-center justify-center gap-2.5 ${
                i < items.length - 1 ? 'md:border-r md:border-gold/10' : ''
              }`}
            >
              <item.icon size={15} className="text-gold flex-shrink-0" strokeWidth={1.5} />
              <span className="text-xs text-brand-300 tracking-wide whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
