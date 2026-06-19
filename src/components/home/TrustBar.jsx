import { Globe, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Globe, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal text-cream/80">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-cream/10">
          {items.map((item) => (
            <div
              key={item.text}
              className="flex items-center justify-center gap-2 py-3 md:py-4 px-3"
            >
              <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold flex-shrink-0" />
              <span className="text-[10px] md:text-xs font-medium tracking-wider uppercase whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}