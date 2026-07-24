import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Sparkles } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: <Truck className="w-4 h-4" />, text: "Free Worldwide Shipping" },
    { icon: <RotateCcw className="w-4 h-4" />, text: "30-Day Returns" },
    { icon: <ShieldCheck className="w-4 h-4" />, text: "18K Gold Plated" },
    { icon: <Sparkles className="w-4 h-4" />, text: "Hypoallergenic" },
  ];

  return (
    <div className="bg-[#1C1C1C] text-[#FCFBF7]/80 py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-8 whitespace-nowrap overflow-x-auto no-scrollbar">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-medium">
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
