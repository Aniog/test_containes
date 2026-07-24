import React from 'react';
import { Truck, RotateCcw, Gem, Sparkles } from 'lucide-react';

const TrustBar = () => {
  const benefits = [
    { icon: <Truck className="h-4 w-4" />, text: "Free Worldwide Shipping" },
    { icon: <RotateCcw className="h-4 w-4" />, text: "30-Day Returns" },
    { icon: <Gem className="h-4 w-4" />, text: "18K Gold Plated" },
    { icon: <Sparkles className="h-4 w-4" />, text: "Hypoallergenic" }
  ];

  return (
    <div className="bg-secondary/50 py-4 border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-4 text-xs md:text-sm tracking-wide font-medium text-foreground/80 md:px-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 flex-grow justify-center md:flex-grow-0">
              <span className="text-primary">{benefit.icon}</span>
              <span className="uppercase tracking-wider">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
