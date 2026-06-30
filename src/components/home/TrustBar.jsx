import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-cream-50 border-y border-brand-100/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-4 overflow-x-auto scrollbar-hide">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 flex-shrink-0">
              <Icon className="w-4 h-4 text-gold-500" strokeWidth={1.5} />
              <span className="text-charcoal-600 text-xs uppercase tracking-wide whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
