import React from 'react';
import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: <Truck size={14} />, text: 'Free Worldwide Shipping' },
    { icon: <RotateCcw size={14} />, text: '30-Day Returns' },
    { icon: <Shield size={14} />, text: '18K Gold Plated' },
    { icon: <Sparkles size={14} />, text: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-brand-base border-b border-brand-text/5 py-4">
      <div className="container mx-auto px-6 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-between min-w-max md:min-w-0 space-x-8 md:space-x-0">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.2em] font-medium text-brand-neutral">
              <span className="text-brand-accent">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
