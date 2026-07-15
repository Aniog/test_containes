import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

const TrustBar = () => (
  <div className="bg-velvet border-b border-white/5">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 py-3.5">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon size={13} strokeWidth={1.5} className="text-gold flex-shrink-0" />
            <span className="text-ivory/70 text-xs uppercase tracking-widest font-sans whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBar;
