import { Truck, RotateCcw, Award, Heart } from 'lucide-react';

const trustItems = [
  {
    icon: Truck,
    title: 'Free Worldwide Shipping',
    description: 'On all orders',
  },
  {
    icon: RotateCcw,
    title: '30-Day Returns',
    description: 'Hassle-free',
  },
  {
    icon: Award,
    title: '18K Gold Plated',
    description: 'Premium quality',
  },
  {
    icon: Heart,
    title: 'Hypoallergenic',
    description: 'Sensitive skin safe',
  },
];

const TrustBar = () => {
  return (
    <div className="bg-cream py-6 md:py-8 border-y border-champagne">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center md:flex-col md:text-center gap-3 md:gap-2"
            >
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-gold-500" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide font-medium text-espresso">
                  {item.title}
                </p>
                <p className="text-xs text-taupe hidden md:block">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
