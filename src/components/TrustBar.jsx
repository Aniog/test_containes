import React from 'react';
import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: '18K Gold Plated' },
    { icon: Sparkles, text: 'Hypoallergenic' }
  ];

  return (
    <div className="bg-velmora-cream border-y border-velmora-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="trust-bar-item">
              <item.icon className="w-4 h-4 text-velmora-gold" />
              <span className="text-velmora-charcoal-light">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
