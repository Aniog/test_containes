import { Globe, Undo2, Gem, Shield } from 'lucide-react';

const items = [
  { icon: Globe, text: 'Free Worldwide Shipping' },
  { icon: Undo2, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-deepbrown text-cream/80">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-3.5 flex items-center justify-center md:justify-between gap-6 md:gap-0 overflow-x-auto">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 flex-shrink-0">
            <item.icon className="w-3.5 h-3.5 text-gold" />
            <span className="font-sans text-[11px] tracking-wider uppercase whitespace-nowrap">{item.text}</span>
            {i < items.length - 1 && <span className="hidden md:block text-cream/20 mx-2">·</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
