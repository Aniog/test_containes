import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

const TrustBar = () => (
  <div className="bg-velvet-900 py-3 px-4">
    <div className="max-w-screen-xl mx-auto flex items-center justify-center gap-6 md:gap-12 flex-wrap">
      {items.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-2">
          <Icon size={13} strokeWidth={1.5} className="text-gold flex-shrink-0" />
          <span className="font-sans text-[10px] md:text-xs tracking-widest uppercase text-ivory-200 whitespace-nowrap">
            {label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default TrustBar;
