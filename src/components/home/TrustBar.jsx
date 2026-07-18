import { Truck, RefreshCw, Gem, Heart } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-charcoal text-white/70">
      <div className="section-padding py-3 md:py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {items.map(item => (
            <div key={item.label} className="flex items-center gap-2 text-[11px] md:text-xs tracking-wide">
              <item.icon className="w-3.5 h-3.5 text-velmora-gold" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
