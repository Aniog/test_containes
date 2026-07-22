import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

const TrustBar = () => (
  <div className="bg-cream border-b border-parchment">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 py-4">
        {trustItems.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon className="w-3.5 h-3.5 text-gold flex-shrink-0" />
            <span className="font-inter text-xs uppercase tracking-[0.1em] text-stone whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBar;
