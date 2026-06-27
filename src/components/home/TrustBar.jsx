import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-cream border-y border-warm-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-2">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-dark-700">
              <item.icon className="w-4 h-4 text-gold-500" />
              <span className="text-xs tracking-wider uppercase font-sans">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
