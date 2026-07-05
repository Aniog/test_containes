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
    <div className="bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap py-4 md:py-5">
          {trustItems.map((item, index) => (
            <React.Fragment key={item.text}>
              <div className="flex items-center gap-2 px-4 md:px-6">
                <item.icon className="w-4 h-4 text-[var(--color-gold-primary)]" />
                <span className="text-xs md:text-sm tracking-wider text-[var(--color-text-secondary)]">
                  {item.text}
                </span>
              </div>
              {index < trustItems.length - 1 && (
                <span className="hidden md:block w-px h-4 bg-[var(--color-border-dark)]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
