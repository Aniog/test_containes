import { Globe, RotateCcw, Sparkles, Heart } from 'lucide-react';

const items = [
  { icon: Globe, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-obsidian py-3.5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon size={12} className="text-gold flex-shrink-0" strokeWidth={1.5} />
              <span className="text-[10px] md:text-xs tracking-widest uppercase font-sans font-medium text-cream/80">
                {item.label}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block text-cream/20 ml-8">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
