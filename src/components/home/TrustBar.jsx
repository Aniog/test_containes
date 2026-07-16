import React from 'react';
import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const trusts = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-dark border-t border-b border-white/5">
      <div className="velmora-container flex flex-wrap items-center justify-center gap-6 md:gap-12 py-3">
        {trusts.map((t) => (
          <div key={t.label} className="flex items-center gap-2 text-white/50 text-[11px] md:text-xs font-sans tracking-wide">
            <t.icon className="w-3.5 h-3.5 text-velmora-gold/60" />
            <span>{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
