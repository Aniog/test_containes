import { Truck, RotateCcw, Gem, Sparkles } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Sparkles, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-cream-400/10 bg-espresso-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-center md:justify-between gap-6 md:gap-0 py-4 overflow-x-auto">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2.5 whitespace-nowrap flex-shrink-0">
              <item.icon className="w-3.5 h-3.5 text-gold/70" />
              <span className="text-[11px] tracking-[0.05em] text-cream-300/50 uppercase font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
