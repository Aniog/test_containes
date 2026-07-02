import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: <Truck className="w-4 h-4" />, text: 'Free Worldwide Shipping' },
    { icon: <RotateCcw className="w-4 h-4" />, text: '30-Day Returns' },
    { icon: <ShieldCheck className="w-4 h-4" />, text: '18K Gold Plated' },
    { icon: <Heart className="w-4 h-4" />, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-white border-b border-black/5 py-5 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-wrap justify-between md:justify-around items-center gap-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-3 text-velmora-charcoal">
            <span className="text-velmora-gold">{item.icon}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium hidden sm:inline">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
