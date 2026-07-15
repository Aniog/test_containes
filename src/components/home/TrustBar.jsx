import React from 'react';
import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';

const items = [
  { label: 'Free Worldwide Shipping', icon: Truck },
  { label: '30-Day Returns', icon: RotateCcw },
  { label: '18K Gold Plated', icon: Sparkles },
  { label: 'Hypoallergenic', icon: ShieldCheck },
];

const TrustBar = () => {
  return (
    <div className="border-b border-border bg-white">
      <div className="section-container">
        <div className="grid grid-cols-2 gap-4 py-4 md:grid-cols-4 md:divide-x md:divide-border">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 text-ink-secondary">
              <item.icon className="h-4 w-4 text-accent" />
              <span className="text-xs font-medium tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
