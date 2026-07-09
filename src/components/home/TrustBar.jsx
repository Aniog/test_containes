import React from 'react';
import { Package, RefreshCcw, ShieldCheck, Heart } from 'lucide-react';

export const TrustBar = () => {
  const features = [
    { icon: <Package className="w-4 h-4" />, text: "Free Worldwide Shipping" },
    { icon: <RefreshCcw className="w-4 h-4" />, text: "30-Day Returns" },
    { icon: <ShieldCheck className="w-4 h-4" />, text: "18K Gold Plated" },
    { icon: <Heart className="w-4 h-4" />, text: "Hypoallergenic" },
  ];

  return (
    <section className="bg-muted py-5 px-6 md:px-12 border-b border-border">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6">
        {features.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 text-muted-foreground">
            <span className="text-accent">{item.icon}</span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium whitespace-nowrap">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
