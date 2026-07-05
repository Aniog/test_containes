import React from 'react';
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' }
  ];

  return (
    <div className="bg-[var(--color-cream)] py-4 border-b border-[var(--color-border)]">
      <div className="container-wide">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-[var(--color-warm-gray)]">
              <item.icon className="w-4 h-4 text-[var(--color-gold)]" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
