import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-cream border-y border-velmora-sand/20">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center justify-items-center">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 sm:gap-3">
              <item.icon className="w-4 h-4 text-velmora-gold flex-shrink-0" />
              <span className="text-xs sm:text-sm text-velmora-taupe tracking-wider uppercase whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
