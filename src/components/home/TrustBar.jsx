import React from 'react';
import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-4 overflow-x-auto hide-scrollbar">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 shrink-0">
              <Icon className="w-4 h-4 text-accent" />
              <span className="text-xs md:text-sm text-muted whitespace-nowrap">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
