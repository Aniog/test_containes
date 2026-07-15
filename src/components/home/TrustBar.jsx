import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export function TrustBar() {
  return (
    <div className="bg-ivory border-y border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-hairline">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2.5 py-4 px-3"
            >
              <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-xs md:text-sm text-warm-gray font-medium whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
