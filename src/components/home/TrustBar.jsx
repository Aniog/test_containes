import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: <Truck className="w-4 h-4" />, label: 'Free Worldwide Shipping' },
    { icon: <RotateCcw className="w-4 h-4" />, label: '30-Day Returns' },
    { icon: <ShieldCheck className="w-4 h-4" />, label: '18K Gold Plated' },
    { icon: <Heart className="w-4 h-4" />, label: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-white border-b-[0.5px] border-slate-100 py-6 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex flex-nowrap md:flex-wrap items-center justify-between gap-8 md:gap-4 overflow-x-auto no-scrollbar">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 flex-shrink-0 whitespace-nowrap"
            >
              <span className="text-[#C5A059]">{item.icon}</span>
              <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.15em] text-slate-500 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
