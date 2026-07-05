import { Globe, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Globe, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-black/5 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-center md:justify-between gap-4 md:gap-0 py-3.5 overflow-x-auto">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 flex-shrink-0">
              <item.icon className="w-3.5 h-3.5 text-velmora-gold" />
              <span className="text-[11px] tracking-wider uppercase text-velmora-stone font-sans font-medium whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
