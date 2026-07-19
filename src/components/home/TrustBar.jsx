import React from 'react';
import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-hairline bg-surface">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-3">
              <item.icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
              <span className="text-[11px] uppercase tracking-widest text-muted font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}