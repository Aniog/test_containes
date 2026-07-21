import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

const TrustBar = () => (
  <div className="bg-velmora-obsidian border-b border-velmora-stone">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex items-center justify-center md:justify-between overflow-x-auto scrollbar-hide gap-6 md:gap-0 py-3">
        {items.map(({ icon: Icon, label }, i) => (
          <div key={label} className="flex items-center gap-2 flex-shrink-0">
            {i > 0 && <div className="hidden md:block w-px h-3 bg-velmora-stone mx-4" />}
            <Icon size={12} strokeWidth={1.5} className="text-velmora-gold flex-shrink-0" />
            <span className="font-manrope text-[10px] uppercase tracking-widest text-velmora-cream/80 whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBar;
