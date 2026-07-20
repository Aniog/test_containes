import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-velmora-warm border-y border-velmora-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-velmora-sand">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 py-4 px-4 md:px-6"
            >
              <item.icon className="w-5 h-5 text-velmora-gold flex-shrink-0" />
              <span className="text-xs sm:text-sm font-sans text-velmora-charcoal tracking-wide whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
