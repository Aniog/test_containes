import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export function TrustBar() {
  return (
    <section className="bg-cream border-y border-hairline">
      <div className="container-wide py-4">
        <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto scrollbar-hide">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 flex-shrink-0"
            >
              <item.icon className="w-4 h-4 text-gold" />
              <span className="text-xs md:text-sm font-medium text-stone whitespace-nowrap">
                {item.text}
              </span>
              {index < trustItems.length - 1 && (
                <span className="hidden md:block w-px h-4 bg-hairline ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
