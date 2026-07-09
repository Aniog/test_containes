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
    <div className="bg-velmora-cream border-b border-velmora-sand/30 py-4 overflow-hidden">
      <div className="flex justify-around items-center gap-8 px-6 md:px-12 flex-nowrap min-w-max md:min-w-0 md:justify-center md:gap-20">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 text-velmora-charcoal/60">
            {item.icon}
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
