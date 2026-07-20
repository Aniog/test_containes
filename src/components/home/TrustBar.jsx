import React from "react";
import { ShieldCheck, Truck, RotateCcw, Sparkles } from "lucide-react";

const TrustBar = () => {
  const items = [
    { icon: <Truck size={16} />, text: "Free Worldwide Shipping" },
    { icon: <RotateCcw size={16} />, text: "30-Day Returns" },
    { icon: <Sparkles size={16} />, text: "18K Gold Plated" },
    { icon: <ShieldCheck size={16} />, text: "Hypoallergenic" },
  ];

  return (
    <div className="bg-slate-50 border-b border-border py-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center gap-6 md:gap-0">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-3 text-[10px] uppercase tracking-widest text-muted-foreground">
              <span className="text-accent">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
