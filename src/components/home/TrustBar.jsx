import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: <Truck size={16} />, text: 'Free Worldwide Shipping' },
    { icon: <RotateCcw size={16} />, text: '30-Day Returns' },
    { icon: <ShieldCheck size={16} />, text: '18K Gold Plated' },
    { icon: <Heart size={16} />, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-background border-b border-border py-4 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between md:justify-around items-center gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-2 text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase text-muted-foreground whitespace-nowrap">
            <span className="text-secondary">{item.icon}</span>
            <span>{item.text}</span>
            {idx !== items.length - 1 && (
              <span className="hidden md:inline-block ml-8 opacity-20">•</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
