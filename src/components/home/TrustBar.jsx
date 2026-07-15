import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Gem } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: <Truck size={18} />, text: 'Free Worldwide Shipping' },
    { icon: <RotateCcw size={18} />, text: '30-Day Returns' },
    { icon: <Gem size={18} />, text: '18K Gold Plated' },
    { icon: <ShieldCheck size={18} />, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-white border-b overflow-x-auto whitespace-nowrap">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center min-w-max md:min-w-0 md:w-full gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-widestest text-zinc-600 font-medium">
            <span className="text-accent">{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
