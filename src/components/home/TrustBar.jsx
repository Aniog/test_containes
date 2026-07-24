import { Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 py-4 md:justify-between md:gap-8 md:px-8">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <item.icon size={16} className="text-accent" />
            <span className="text-xs font-medium uppercase tracking-widest text-muted">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
