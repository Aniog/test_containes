import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

const TrustBar = () => {
  return (
    <section className="bg-cream py-4 border-y border-hairline">
      <div className="container-wide">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-xs tracking-wider text-warm-gray"
            >
              <item.icon size={16} className="text-gold" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
