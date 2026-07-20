import React from "react";
import { Truck, RotateCcw, ShieldCheck, Heart } from "lucide-react";

export const TrustBar = () => {
  const features = [
    { icon: <Truck className="w-4 h-4" />, text: "Free Worldwide Shipping" },
    { icon: <RotateCcw className="w-4 h-4" />, text: "30-Day Returns" },
    { icon: <ShieldCheck className="w-4 h-4" />, text: "18K Gold Plated" },
    { icon: <Heart className="w-4 h-4" />, text: "Hypoallergenic" },
  ];

  return (
    <div className="bg-secondary/50 border-b border-border py-4 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center gap-8 md:gap-0 overflow-x-auto no-scrollbar">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <span className="text-primary">{feature.icon}</span>
              <span className="text-[10px] uppercase tracking-widest font-medium">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
