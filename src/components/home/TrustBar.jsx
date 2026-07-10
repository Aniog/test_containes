import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const TrustBar = () => {
  const features = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Gem, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-velmora-bg-secondary border-y border-velmora-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-velmora-border">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 py-4 px-4 text-center"
            >
              <feature.icon className="w-5 h-5 text-velmora-accent flex-shrink-0" />
              <span className="text-xs md:text-sm tracking-wide text-velmora-text-secondary whitespace-nowrap">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
