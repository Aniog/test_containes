import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const TrustBar = () => {
  const items = [
    {
      icon: Truck,
      text: 'Free Worldwide Shipping',
    },
    {
      icon: RotateCcw,
      text: '30-Day Returns',
    },
    {
      icon: Sparkles,
      text: '18K Gold Plated',
    },
    {
      icon: Shield,
      text: 'Hypoallergenic',
    },
  ];

  return (
    <section className="bg-charcoal-800 border-t border-b border-charcoal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 md:py-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 md:gap-3"
            >
              <item.icon size={16} className="text-gold-400 flex-shrink-0" />
              <span className="font-sans text-xs tracking-wider text-ivory-200 uppercase">
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
