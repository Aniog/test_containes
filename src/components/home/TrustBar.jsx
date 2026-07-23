import { Globe, RotateCcw, Sparkles, Heart } from 'lucide-react';

const items = [
  { icon: Globe, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-obsidian py-3 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon size={13} className="text-gold flex-shrink-0" />
            <span className="text-[11px] tracking-widest uppercase text-parchment/80 font-sans">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
