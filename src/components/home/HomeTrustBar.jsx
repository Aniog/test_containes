import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react';

const HomeTrustBar = () => {
  const items = [
    { icon: <Truck size={16} />, text: 'Free Worldwide Shipping' },
    { icon: <RotateCcw size={16} />, text: '30-Day Returns' },
    { icon: <ShieldCheck size={16} />, text: '18K Gold Plated' },
    { icon: <Heart size={16} />, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-[#FAF9F6] border-b border-[#E5E5E5] py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-[#1A1A1A]/80">
            <span className="text-gold">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTrustBar;
