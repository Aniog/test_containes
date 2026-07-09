import React from 'react';
import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-black text-white">
      <div className="container-velmora">
        <div className="flex items-center justify-center py-3 md:py-4 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-6 md:gap-12 whitespace-nowrap">
            {trustItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <item.icon size={14} className="text-velmora-gold flex-shrink-0" />
                <span className="text-[11px] md:text-xs tracking-wider uppercase text-white/80">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
