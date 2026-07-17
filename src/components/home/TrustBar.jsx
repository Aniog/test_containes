import React from 'react';
import { Truck, RotateCcw, Shield, Droplets } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Droplets, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-[#2a2a2a] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between md:justify-center gap-4 md:gap-12 py-3 md:py-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-xs md:text-sm text-[#a09890] whitespace-nowrap">
              <item.icon className="w-4 h-4 text-gold" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}