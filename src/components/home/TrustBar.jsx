import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Worldwide Shipping',
    description: 'On all orders over $50',
  },
  {
    icon: RotateCcw,
    title: '30-Day Returns',
    description: 'Hassle-free exchanges',
  },
  {
    icon: Gem,
    title: '18K Gold Plated',
    description: 'Premium quality finish',
  },
  {
    icon: Heart,
    title: 'Hypoallergenic',
    description: 'Safe for sensitive skin',
  },
];

export function TrustBar() {
  return (
    <section className="bg-warm-ivory border-y border-warm-gray-100 py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center md:items-start gap-3 md:flex-col md:text-center"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-champagne">
                <feature.icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xs font-medium tracking-wider uppercase text-warm-gray-900">
                  {feature.title}
                </h3>
                <p className="hidden md:block text-xs text-warm-gray-600 mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBar;
