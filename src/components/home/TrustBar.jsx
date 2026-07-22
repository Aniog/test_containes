import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-ivory-200 py-4 border-y border-charcoal-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-charcoal-700"
            >
              <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="font-sans text-xs md:text-sm whitespace-nowrap">
                {item.text}
              </span>
              {index < trustItems.length - 1 && (
                <span className="hidden md:block w-px h-4 bg-charcoal-300 ml-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
