import React from 'react';
import { ShieldCheck, Truck, RefreshCcw, Sparkles } from 'lucide-react';

export default function TrustBar() {
  const features = [
    {
      icon: <Truck className="w-4 h-4 mb-2 lg:mb-0 lg:mr-3 text-primary" />,
      text: "Free Worldwide Shipping",
    },
    {
      icon: <RefreshCcw className="w-4 h-4 mb-2 lg:mb-0 lg:mr-3 text-primary" />,
      text: "30-Day Returns",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 mb-2 lg:mb-0 lg:mr-3 text-primary" />,
      text: "18K Gold Plated",
    },
    {
      icon: <Sparkles className="w-4 h-4 mb-2 lg:mb-0 lg:mr-3 text-primary" />,
      text: "Hypoallergenic",
    }
  ];

  return (
    <div className="bg-background border-b border-border py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-border">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-2 ${index % 2 === 0 ? 'border-none md:border-l' : ''} ${index === 0 ? 'border-none' : ''}`}>
               {feature.icon}
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-medium text-foreground/80">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}