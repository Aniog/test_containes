import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-surfaceAlt border-b border-velmora-warm">
      <div className="container-velmora py-4 md:py-5">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 md:gap-6">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <item.icon className="w-4 h-4 text-velmora-gold" />
              <span className="text-xs md:text-sm text-velmora-stone tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
