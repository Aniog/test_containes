import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal-900 border-b border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon size={14} className="text-gold-400" strokeWidth={1.5} />
              <span className="text-[11px] md:text-xs tracking-wide text-charcoal-300 font-medium uppercase whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
