import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-warm-50 border-b border-warm-200">
      <div className="container-wide section-padding">
        <div className="flex items-center justify-center md:justify-between gap-6 md:gap-0 py-3 overflow-x-auto">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 flex-shrink-0">
              <item.icon className="w-3.5 h-3.5 text-accent" />
              <span className="text-[11px] md:text-xs font-medium text-warm-600 tracking-wide whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}