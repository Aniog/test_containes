import { Globe, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Globe, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-sand border-y border-warmgray/20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-3.5 flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {items.map((item) => (
          <div key={item.text} className="flex items-center gap-2 text-espresso/70">
            <item.icon size={14} className="text-gold flex-shrink-0" />
            <span className="text-[11px] tracking-wider uppercase font-medium whitespace-nowrap">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
