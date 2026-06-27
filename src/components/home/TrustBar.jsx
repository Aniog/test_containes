import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-ivory py-4 border-y border-border">
      <div className="container-wide">
        <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 overflow-x-auto">
          {trustItems.map((item, index) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-nowrap"
            >
              <item.icon size={16} className="text-gold flex-shrink-0" />
              <span className="text-xs md:text-sm text-warm-gray font-medium">
                {item.text}
              </span>
              {index < trustItems.length - 1 && (
                <span className="hidden md:inline text-border mx-2">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
