import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Gem, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-surface border-y border-border">
      <div className="max-w-container mx-auto px-4 md:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-white/70 text-sm"
            >
              <item.icon className="w-4 h-4 text-gold" />
              <span className="uppercase tracking-wider">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;