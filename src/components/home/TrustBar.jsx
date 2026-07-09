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
    <div className="bg-velmora-sand/30 py-4 border-y border-velmora-sand">
      <div className="container-velmora">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-sm text-velmora-charcoal/80"
            >
              <item.icon size={18} className="text-velmora-gold" />
              <span className="tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
