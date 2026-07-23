import { Globe, RotateCcw, Gem, Heart } from 'lucide-react';

const items = [
  { icon: Globe, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal-950 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center md:justify-between py-3 md:py-4 flex-wrap gap-4 md:gap-0">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-cream-300/70">
              <item.icon className="w-3.5 h-3.5" />
              <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.1em]">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}