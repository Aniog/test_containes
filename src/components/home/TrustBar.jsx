import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Gem } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: <Truck className="w-4 h-4" />, text: 'Free Worldwide Shipping' },
    { icon: <RotateCcw className="w-4 h-4" />, text: '30-Day Returns' },
    { icon: <Gem className="w-4 h-4" />, text: '18K Gold Plated' },
    { icon: <ShieldCheck className="w-4 h-4" />, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-white border-b border-neutral-100 py-3 md:py-4 overflow-hidden">
      <div className="flex items-center justify-center md:gap-12 gap-8 whitespace-nowrap animate-in fade-in duration-1000">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2 md:gap-3">
            <span className="text-velmora-gold">{item.icon}</span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-neutral-500 font-sans">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
