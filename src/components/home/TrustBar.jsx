import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: <Truck className="w-4 h-4" />, text: "Free Worldwide Shipping" },
    { icon: <RotateCcw className="w-4 h-4" />, text: "30-Day Returns" },
    { icon: <ShieldCheck className="w-4 h-4" />, text: "18K Gold Plated" },
    { icon: <Heart className="w-4 h-4" />, text: "Hypoallergenic" },
  ];

  return (
    <div className="bg-white border-b border-stone-muted py-4 overflow-hidden">
      <div className="container-custom flex justify-between items-center gap-8 md:gap-4 overflow-x-auto no-scrollbar">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <span className="text-gold">{item.icon}</span>
            <span className="text-[10px] md:text-xs tracking-widest uppercase font-medium text-stone-600 whitespace-nowrap">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
