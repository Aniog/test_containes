import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  {
    icon: Truck,
    title: 'Free Worldwide Shipping',
    subtitle: 'On orders over $50',
  },
  {
    icon: RotateCcw,
    title: '30-Day Returns',
    subtitle: 'Easy returns & exchanges',
  },
  {
    icon: Gem,
    title: '18K Gold Plated',
    subtitle: 'Premium quality materials',
  },
  {
    icon: Heart,
    title: 'Hypoallergenic',
    subtitle: 'Sensitive-skin friendly',
  },
];

const TrustBar = () => {
  return (
    <section className="bg-charcoal py-6">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-warm-gray/30">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-center lg:justify-start gap-4 lg:px-8 py-3 lg:py-0"
            >
              <div className="flex-shrink-0">
                <item.icon size={24} strokeWidth={1.5} className="text-gold" />
              </div>
              <div className="text-left">
                <p className="font-sans text-xs uppercase tracking-wider text-white">
                  {item.title}
                </p>
                <p className="font-sans text-[11px] text-muted-gray mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
