import React from 'react';
import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' }
];

export default function TrustBar() {
  return (
    <section 
      className="border-y py-5"
      style={{ 
        backgroundColor: 'var(--velmora-warm-white)',
        borderColor: 'var(--velmora-sand)'
      }}
    >
      <div className="velmora-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3"
            >
              <item.icon 
                size={18} 
                strokeWidth={1.5} 
                style={{ color: 'var(--velmora-gold)' }}
              />
              <span className="text-xs md:text-sm uppercase tracking-wider whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
