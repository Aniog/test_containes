import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-surface-alt border-y border-border">
      <div className="container-wide mx-auto px-4">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-4 overflow-x-auto scrollbar-hide">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 flex-shrink-0">
              <Icon size={14} className="text-accent" />
              <span className="text-xs text-text-secondary font-medium tracking-nav whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
