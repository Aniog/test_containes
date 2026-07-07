import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

const TrustBar = () => {
  return (
    <section className="bg-sand/50 border-y border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-sand">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 py-4 px-3"
            >
              <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="font-sans text-xs sm:text-sm text-charcoal whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
