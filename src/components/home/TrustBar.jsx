import { Globe, RotateCcw, Sparkles, Heart } from 'lucide-react';

const trustItems = [
  { icon: Globe, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-obsidian border-b border-velmora-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-0 divide-x divide-velmora-charcoal">
          {trustItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 md:px-8 py-3.5 flex-1 justify-center min-w-[140px]"
            >
              <Icon className="w-3.5 h-3.5 text-velmora-gold flex-shrink-0" />
              <span className="font-manrope text-[11px] uppercase tracking-widest text-velmora-ivory/80 whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
