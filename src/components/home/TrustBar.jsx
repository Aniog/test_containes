import React from 'react';
import { ShieldCheck, Truck, RefreshCw, Sparkles } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: <Truck className="w-4 h-4" />, text: "Free Worldwide Shipping" },
    { icon: <RefreshCw className="w-4 h-4" />, text: "30-Day Returns" },
    { icon: <Sparkles className="w-4 h-4" />, text: "18K Gold Plated" },
    { icon: <ShieldCheck className="w-4 h-4" />, text: "Hypoallergenic" },
  ];

  return (
    <section className="bg-cream border-b border-charcoal/5 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-6 md:gap-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-charcoal text-[10px] md:text-[11px] tracking-[0.15em] uppercase font-medium">
              <span className="text-gold">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
