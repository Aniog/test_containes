import React from 'react';
import { Truck, ShieldCheck, Gem, Sparkles } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: <Truck size={14} strokeWidth={1.5} />, text: 'Worldwide Shipping' },
    { icon: <ShieldCheck size={14} strokeWidth={1.5} />, text: '30-Day Returns' },
    { icon: <Gem size={14} strokeWidth={1.5} />, text: '18K Gold Plated' },
    { icon: <Sparkles size={14} strokeWidth={1.5} />, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-background border-b border-muted py-5 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-nowrap md:justify-between items-center gap-8 md:gap-4 overflow-x-auto no-scrollbar whitespace-nowrap">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-primary/80">{item.icon}</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-foreground/70">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
