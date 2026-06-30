import { Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-y border-divider bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6 md:gap-0 md:justify-between py-4 overflow-x-auto">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 flex-shrink-0">
              <Icon size={16} className="text-gold" />
              <span className="text-[11px] tracking-wider uppercase text-stone whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
