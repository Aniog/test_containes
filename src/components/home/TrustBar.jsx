import React from 'react';
import { Plane, RefreshCw, Shield, Sparkles } from 'lucide-react';

const items = [
  { icon: Plane, text: 'Free Worldwide Shipping' },
  { icon: RefreshCw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Sparkles, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-velmora-dark py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2.5">
              <item.icon size={14} className="text-velmora-gold" />
              <span className="font-sans text-[11px] tracking-[0.08em] text-velmora-cream/60 whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}