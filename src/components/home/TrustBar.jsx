import { Globe, RotateCcw, Sparkles, Heart } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Globe, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-obsidian border-b border-ivory/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-0 divide-x divide-ivory/10">
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 md:px-6 py-3 flex-1 justify-center min-w-[140px]"
            >
              <Icon size={13} strokeWidth={1.5} className="text-gold flex-shrink-0" />
              <span className="font-manrope text-[11px] tracking-widest uppercase text-ivory/70 whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
