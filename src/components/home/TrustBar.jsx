import { Globe, RotateCcw, Sparkles, Heart } from 'lucide-react';

const items = [
  { icon: Globe, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

const TrustBar = () => (
  <div className="bg-velmora-stone border-y border-velmora-gold/20">
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
      <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 py-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon className="w-3.5 h-3.5 text-velmora-gold flex-shrink-0" strokeWidth={1.5} />
            <span className="font-inter text-[11px] tracking-[0.12em] uppercase text-velmora-charcoal whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBar;
