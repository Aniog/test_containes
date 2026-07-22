import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck,      label: 'Free Worldwide Shipping' },
  { icon: RotateCcw,  label: '30-Day Returns' },
  { icon: Sparkles,   label: '18K Gold Plated' },
  { icon: Shield,     label: 'Hypoallergenic' },
];

const TrustBar = () => (
  <div className="bg-espresso border-b border-ivory/10">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
      <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto scrollbar-hide">
        {items.map(({ icon: Icon, label }, i) => (
          <div key={label} className="flex items-center gap-2 flex-shrink-0">
            {i > 0 && (
              <span className="hidden md:block w-px h-3 bg-ivory/20 mr-4" />
            )}
            <Icon size={12} strokeWidth={1.5} className="text-gold flex-shrink-0" />
            <span className="font-inter text-[10px] uppercase tracking-widest2 text-ivory/70 whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBar;
