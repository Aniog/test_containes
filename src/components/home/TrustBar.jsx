import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: <Truck size={16} />, text: 'Free Worldwide Shipping' },
    { icon: <RotateCcw size={16} />, text: '30-Day Returns' },
    { icon: <ShieldCheck size={16} />, text: '18K Gold Plated' },
    { icon: <Sparkles size={16} />, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-[#FAF9F6] border-y border-border overflow-x-auto no-scrollbar">
      <div className="container mx-auto py-5 px-6 flex justify-between items-center gap-10 whitespace-nowrap min-w-max md:min-w-0">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 text-muted-foreground text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
            <span className="text-accent">{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
