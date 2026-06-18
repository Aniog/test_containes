import { Truck, RotateCcw, Sparkles, Heart } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-obsidian border-b border-ivory/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 md:gap-0">
          {items.map(({ icon: Icon, label }, i) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-3 h-3 text-gold flex-shrink-0" />
              <span className="font-manrope text-[11px] uppercase tracking-widest text-ivory/70">
                {label}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block w-px h-3 bg-ivory/20 ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
