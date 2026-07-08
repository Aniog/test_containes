import { Globe, RotateCcw, Sparkles, Heart } from 'lucide-react';

const trustItems = [
  { icon: Globe, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-obsidian border-b border-ivory/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 py-3.5">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="w-3.5 h-3.5 text-gold flex-shrink-0" strokeWidth={1.5} />
              <span className="font-inter text-[11px] tracking-widest uppercase text-ivory/70">
                {item.label}
              </span>
              {i < trustItems.length - 1 && (
                <span className="hidden md:block ml-4 text-ivory/20 text-xs">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
