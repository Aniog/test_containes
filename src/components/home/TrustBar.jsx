import React from 'react';
import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Sparkles, text: '18K Gold Plated' },
    { icon: Shield, text: 'Hypoallergenic' }
  ];

  return (
    <section className="bg-cream py-6 md:py-8">
      <div className="container-premium">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-3">
              <item.icon size={20} className="text-gold flex-shrink-0" />
              <span className="text-sm tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
