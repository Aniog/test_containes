import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-brand-charcoal text-brand-cream py-4 md:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {items.map(item => (
            <div key={item.label} className="flex items-center justify-center gap-2 md:gap-3">
              <item.icon size={16} className="text-brand-gold" strokeWidth={1.5} />
              <span className="font-sans text-[11px] md:text-xs tracking-wider uppercase text-brand-cream/80">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
