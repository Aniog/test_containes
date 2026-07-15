import { ShieldCheck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: ShieldCheck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-warm-light border-y border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4 overflow-x-auto scrollbar-hide gap-6">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center gap-2 flex-shrink-0">
              <item.icon className="w-3.5 h-3.5 text-gold" />
              <span className="text-[10px] sm:text-[11px] text-taupe uppercase tracking-[0.1em] whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}