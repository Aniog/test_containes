import React from 'react';
import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Truck, label: 'Free Worldwide Shipping' },
    { icon: RotateCcw, label: '30-Day Returns' },
    { icon: Sparkles, label: '18K Gold Plated' },
    { icon: ShieldCheck, label: 'Hypoallergenic' },
  ];

  return (
    <div className="hairline bg-white">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 md:py-5">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 text-xs font-medium text-ink-secondary md:text-sm">
              <item.icon className="h-4 w-4 text-accent" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
