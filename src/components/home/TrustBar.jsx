import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Truck, label: 'Free Worldwide Shipping' },
    { icon: RotateCcw, label: '30-Day Returns' },
    { icon: ShieldCheck, label: '18K Gold Plated' },
    { icon: Sparkles, label: 'Hypoallergenic' }
  ];

  return (
    <div className="bg-white border-b border-[#e8e0d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#e8e0d5]">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2 py-3">
              <Icon className="w-4 h-4 text-[#b08d57]" />
              <span className="text-xs tracking-widest uppercase text-[#3d3229]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
