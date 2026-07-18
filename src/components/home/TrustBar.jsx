import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Gem, text: '18K Gold Plated' },
    { icon: Shield, text: 'Hypoallergenic' },
  ];

  return (
    <section className="border-b border-taupe bg-ivory">
      <div className="px-6 md:px-12 lg:px-20 py-4">
        <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto hide-scrollbar">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0">
              <item.icon className="w-4 h-4 text-gold" />
              <span className="text-xs font-sans font-medium text-warm-gray tracking-wide-sm whitespace-nowrap">
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
