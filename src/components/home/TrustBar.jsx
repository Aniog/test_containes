import React from 'react';
import { Package, RefreshCw, ShieldCheck, Sparkles } from 'lucide-react';

const TrustBar = () => {
  const features = [
    { icon: <Package size={20} strokeWidth={1.5} />, text: 'Free Worldwide Shipping' },
    { icon: <RefreshCw size={20} strokeWidth={1.5} />, text: '30-Day Returns' },
    { icon: <Sparkles size={20} strokeWidth={1.5} />, text: '18K Gold Plated' },
    { icon: <ShieldCheck size={20} strokeWidth={1.5} />, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-secondary text-foreground py-4 border-b border-gray-200">
      <div className="container mx-auto px-6">
        <ul className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4 text-xs tracking-wider uppercase font-medium">
          {features.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-primary">{item.icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrustBar;