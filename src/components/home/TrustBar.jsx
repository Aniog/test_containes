import React from 'react';
import { Package, RefreshCw, Shield, Sparkles } from 'lucide-react';

const items = [
  { icon: Package, text: 'Free Worldwide Shipping' },
  { icon: RefreshCw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Sparkles, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-brand-charcoal text-white/80">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-3">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-xs tracking-wide">
              <item.icon className="w-3.5 h-3.5 text-brand-gold" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
