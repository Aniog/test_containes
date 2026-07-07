import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-brand-cream border-y border-brand-cream-dark">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-center gap-6 sm:gap-10 lg:gap-16 py-4 overflow-x-auto scrollbar-hide">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 flex-shrink-0">
              <item.icon size={15} className="text-brand-gold" strokeWidth={1.5} />
              <span className="text-[11px] sm:text-xs text-brand-warm-gray tracking-[0.08em] uppercase whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
