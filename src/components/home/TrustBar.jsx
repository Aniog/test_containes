import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-cream border-b border-hairline">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-4">
        <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
              <item.icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <span className="text-[11px] md:text-xs uppercase tracking-widest text-muted font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
