import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: <Truck className="w-4 h-4" />, text: 'Free Worldwide Shipping' },
    { icon: <RotateCcw className="w-4 h-4" />, text: '30-Day Returns' },
    { icon: <ShieldCheck className="w-4 h-4" />, text: '18K Gold Plated' },
    { icon: <Sparkles className="w-4 h-4" />, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-white border-b border-neutral-100 py-6 md:py-8">
      <div className="max-w-screen-2xl mx-auto px-4 overflow-x-auto">
        <div className="flex items-center justify-between min-w-[600px] md:min-w-0 md:flex-wrap gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-neutral-400 group">
              <span className="text-neutral-300 group-hover:text-black transition-colors duration-300">
                {item.icon}
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
