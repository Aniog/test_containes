import React from 'react';
import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Sparkles, text: '18K Gold Plated' },
    { icon: Shield, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-gray-light py-6">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center space-x-3 md:space-x-4"
            >
              <item.icon size={20} className="text-gold flex-shrink-0" />
              <span className="font-sans text-xs md:text-sm tracking-wide uppercase whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}