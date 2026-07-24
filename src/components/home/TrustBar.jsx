import React from 'react';
import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const TrustBar = () => {
  const trustItems = [
    {
      icon: <Truck className="w-5 h-5" />,
      text: 'Free Worldwide Shipping'
    },
    {
      icon: <RotateCcw className="w-5 h-5" />,
      text: '30-Day Returns'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: '18K Gold Plated'
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      text: 'Hypoallergenic'
    }
  ];
  
  return (
    <section className="bg-cream-100 border-y border-cream-200">
      <div className="container-wide">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 py-4 px-4">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-gold-600">
                {item.icon}
              </span>
              <span className="font-sans text-xs md:text-sm tracking-wider uppercase text-espresso-700">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
