import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: <Truck className="w-4 h-4" />, text: "Free Worldwide Shipping" },
    { icon: <RotateCcw className="w-4 h-4" />, text: "30-Day returns" },
    { icon: <ShieldCheck className="w-4 h-4" />, text: "18K Gold Plated" },
    { icon: <Sparkles className="w-4 h-4" />, text: "Hypoallergenic" },
  ];

  return (
    <div className="bg-white border-b border-black/5 py-3 md:py-4 px-6 md:px-12 overflow-x-auto">
      <div className="max-w-7xl mx-auto flex justify-between space-x-8 md:space-x-0 whitespace-nowrap lg:whitespace-normal">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 text-primary">
            <span className="opacity-80">{item.icon}</span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-sans font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
