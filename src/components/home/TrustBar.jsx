import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-y border-brand-taupe bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-3 py-3 md:py-4">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-xs md:text-sm text-brand-warm-gray">
              <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span className="uppercase tracking-[0.08em] whitespace-nowrap">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}