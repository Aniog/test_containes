import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react';

export const TrustBar = () => {
  const items = [
    { icon: <Truck className="w-4 h-4" />, text: 'Free Worldwide Shipping' },
    { icon: <RotateCcw className="w-4 h-4" />, text: '30-Day Returns' },
    { icon: <ShieldCheck className="w-4 h-4" />, text: '18K Gold Plated' },
    { icon: <Heart className="w-4 h-4" />, text: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-white border-b border-stone-100 py-6 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between space-x-8 md:space-x-0">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className="flex items-center space-x-3 whitespace-nowrap"
          >
            <span className="text-[#B08D57]">{item.icon}</span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-medium text-stone-500">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
