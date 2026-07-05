import React from 'react';
import { Package, RefreshCw, Sparkles, ShieldCheck } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: <Package size={14} />, text: 'Free Worldwide Shipping' },
    { icon: <RefreshCw size={14} />, text: '30-Day Returns' },
    { icon: <Sparkles size={14} />, text: '18K Gold Plated' },
    { icon: <ShieldCheck size={14} />, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-background border-b border-border py-4 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-0">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 text-primary/70">
            {item.icon}
            <span className="text-[10px] md:text-[11px] uppercase tracking-widest font-medium">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
