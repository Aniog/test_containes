import React from 'react';
import { Truck, RefreshCw, Sparkles, Shield } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RefreshCw, text: '30-Day Returns' },
    { icon: Sparkles, text: '18K Gold Plated' },
    { icon: Shield, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-velmora-sand py-6">
      <div className="container-premium">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <item.icon size={20} className="text-velmora-gold" />
              <span className="text-sm tracking-wide uppercase">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
