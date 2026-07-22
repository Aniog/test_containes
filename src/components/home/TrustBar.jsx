import React from 'react';
import { Truck, RefreshCw, Sparkles, Shield } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RefreshCw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-y border-velvet-200 bg-white">
      <div className="container-site">
        <div className="flex items-center justify-center md:justify-between py-3 gap-4 md:gap-0 flex-wrap">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-velvet-700">
              <item.icon className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
              <span className="text-[11px] md:text-xs tracking-wider uppercase font-sans font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
