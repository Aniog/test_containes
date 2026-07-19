import { Globe, RotateCcw, Sparkles, Heart } from 'lucide-react';

const items = [
  { icon: Globe, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal py-3.5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto scrollbar-hide">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0">
              <item.icon size={13} strokeWidth={1.5} className="text-gold" />
              <span className="font-inter text-[10px] md:text-xs uppercase tracking-[0.12em] text-ivory/80 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
