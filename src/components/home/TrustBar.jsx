import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  {
    icon: Truck,
    text: 'Free Worldwide Shipping',
  },
  {
    icon: RotateCcw,
    text: '30-Day Returns',
  },
  {
    icon: Gem,
    text: '18K Gold Plated',
  },
  {
    icon: Heart,
    text: 'Hypoallergenic',
  },
];

const TrustBar = () => {
  return (
    <section className="bg-cream py-4 md:py-5 border-y border-linen">
      <div className="container-main">
        <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto scrollbar-hide">
          {trustItems.map((item, index) => (
            <div
              key={item.text}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <item.icon className="w-4 h-4 text-champagne" strokeWidth={1.5} />
              <span className="text-xs md:text-sm text-mocha tracking-wide">
                {item.text}
              </span>
              {index < trustItems.length - 1 && (
                <span className="hidden md:block w-px h-4 bg-linen ml-4 md:ml-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
