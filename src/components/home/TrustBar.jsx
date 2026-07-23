import { Truck, RotateCcw, Sparkles, Leaf } from 'lucide-react';

const ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Leaf, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-linen bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-3 px-5 py-4 md:flex md:items-center md:justify-center md:gap-0 md:px-10">
        {ITEMS.map((item, i) => (
          <div
            key={item.label}
            className={`flex items-center justify-center gap-2.5 ${
              i > 0 ? 'md:border-l md:border-linen' : ''
            } md:px-8`}
          >
            <item.icon className="h-4 w-4 shrink-0 text-bronze" strokeWidth={1.5} />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-umber">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
