import React from 'react';
import { Globe, RotateCcw, Sparkles, Heart } from 'lucide-react';

const items = [
  { icon: Globe, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

const TrustBar = () => (
  <div className="bg-obsidian border-b border-gold/20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 py-3">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon size={12} strokeWidth={1.5} className="text-gold flex-shrink-0" />
            <span className="font-sans text-[10px] tracking-widest uppercase text-cream/60">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBar;
