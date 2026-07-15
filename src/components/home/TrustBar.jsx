import React from 'react';
import { Truck, RotateCcw, Sparkles, Heart } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-stone-600">
              <item.icon className="w-4 h-4 text-velmora-gold" />
              <span className="text-xs uppercase tracking-widest">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
