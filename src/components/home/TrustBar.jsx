import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-ink-200 bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-4 sm:py-5">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-ink-600">
              <item.icon size={16} strokeWidth={1.5} className="text-gold-500" />
              <span className="text-[11px] sm:text-xs tracking-wider uppercase font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
