import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-charcoal text-white/70">
      <div className="container-site">
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-2 py-3 text-[11px] md:text-xs tracking-wider uppercase">
          {items.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="w-3.5 h-3.5 text-velmora-gold/70" />
              <span>{item.label}</span>
              {i < items.length - 1 && <span className="hidden md:inline text-white/15 mx-2">·</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
