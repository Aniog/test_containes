import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export function TrustBar() {
  return (
    <div className="border-b border-velmora-stone bg-velmora-cream">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 md:py-5">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <item.icon size={16} className="text-velmora-gold" strokeWidth={1.5} />
            <span className="font-sans text-xs uppercase tracking-widest text-velmora-charcoal">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
