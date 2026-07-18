import React from 'react';
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';
import { trustItems } from '../../data/products';

const icons = [Truck, RotateCcw, Shield, Heart];

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 py-4">
          {trustItems.map((item, index) => {
            const Icon = icons[index];
            return (
              <div key={item} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-xs tracking-wider uppercase text-secondary">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
