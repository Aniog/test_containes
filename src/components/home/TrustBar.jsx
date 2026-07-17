import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ];

  return (
    <section className="border-y border-sand bg-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-0">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 px-3">
              <item.icon className="w-4 h-4 text-gold" />
              <span className="text-xs md:text-sm text-taupe tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
