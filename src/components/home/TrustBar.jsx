import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { Icon: Truck, text: 'Free Worldwide Shipping' },
  { Icon: RotateCcw, text: '30-Day Returns' },
  { Icon: Sparkles, text: '18K Gold Plated' },
  { Icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-ivory-dark border-y border-stone-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 py-4">
          {items.map(({ Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5">
              <Icon size={14} strokeWidth={1.5} className="text-gold flex-shrink-0" />
              <span className="font-sans text-xs uppercase tracking-[0.1em] text-espresso">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
