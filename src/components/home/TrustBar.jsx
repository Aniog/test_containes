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
    <div className="bg-velvet-100 border-y border-velvet-200">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-3.5">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-velvet-600 font-sans tracking-widest uppercase">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon className="w-3.5 h-3.5 text-warm-600" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
