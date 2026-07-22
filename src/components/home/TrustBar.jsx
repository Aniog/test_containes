import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

const TrustBar = () => {
  return (
    <div className="bg-linen border-b border-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 py-3.5">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-3.5 h-3.5 text-champagne flex-shrink-0" strokeWidth={1.5} />
              <span className="font-inter text-[11px] uppercase tracking-[0.1em] text-stone whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
