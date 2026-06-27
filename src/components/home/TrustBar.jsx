import { Truck, RefreshCw, Shield, Heart } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RefreshCw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-xs tracking-wider uppercase text-[var(--color-text-muted)]">
              <Icon className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
