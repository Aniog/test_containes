import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-hairline bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center md:justify-between gap-6 overflow-x-auto">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5 whitespace-nowrap">
            <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
            <span className="text-xs uppercase tracking-[0.1em] font-medium text-muted">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
