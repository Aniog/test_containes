import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Gem } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: <Truck size={16} />, text: "Free Worldwide Shipping" },
    { icon: <RotateCcw size={16} />, text: "30-Day Returns" },
    { icon: <Gem size={16} />, text: "18K Gold Plated" },
    { icon: <ShieldCheck size={16} />, text: "Hypoallergenic" },
  ];

  return (
    <div className="bg-velmora-surface py-4 border-b border-velmora-surface/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-nowrap md:justify-between items-center gap-12 md:gap-4 overflow-x-auto no-scrollbar">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3 whitespace-nowrap min-w-max">
              <span className="text-velmora-accent">{item.icon}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-velmora-muted">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default TrustBar;
