import React from 'react';
import { Truck, RefreshCw, Shield, Heart } from 'lucide-react';

const icons = {
  truck: Truck,
  refresh: RefreshCw,
  shield: Shield,
  heart: Heart,
};

export default function TrustBar() {
  const badges = [
    { icon: 'truck', text: 'Free Worldwide Shipping' },
    { icon: 'refresh', text: '30-Day Returns' },
    { icon: 'shield', text: '18K Gold Plated' },
    { icon: 'heart', text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-[#1a1a1a] text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {badges.map((badge) => {
            const Icon = icons[badge.icon];
            return (
              <div key={badge.text} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-[#b8860b]" />
                <span className="text-xs tracking-[0.1em]">{badge.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
