import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

const TrustBar = () => (
  <div className="bg-charcoal border-b border-gold/20">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 py-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon size={13} strokeWidth={1.5} className="text-gold flex-shrink-0" />
            <span className="text-[10px] tracking-widest uppercase text-cream/70 font-medium whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBar;
