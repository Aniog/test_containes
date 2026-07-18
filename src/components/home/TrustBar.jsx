import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-brand-espresso text-brand-ivory/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {items.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-brand-gold" />
              <span className="font-sans text-[11px] tracking-extra-wide uppercase">{item.label}</span>
              {i < items.length - 1 && (
                <span className="hidden sm:inline ml-8 text-brand-charcoal-light">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
