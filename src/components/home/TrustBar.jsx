import { Globe, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const trustItems = [
  { icon: Globe, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-ink-800 border-t border-ink-600/20">
      <div className="section-padding py-4 flex items-center justify-center gap-6 md:gap-12 overflow-x-auto scrollbar-hide">
        {trustItems.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2 flex-shrink-0">
            <Icon className="w-3.5 h-3.5 text-gold-400" />
            <span className="font-sans text-[10px] md:text-xs tracking-wide text-cream-300/70 whitespace-nowrap uppercase">
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
