import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const TrustBar = () => {
  const features = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Gem, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-border)]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 py-4 px-4"
            >
              <feature.icon 
                size={18} 
                className="text-[var(--color-accent)] flex-shrink-0" 
                strokeWidth={1.5}
              />
              <span className="font-sans text-xs md:text-sm text-[var(--color-secondary)] whitespace-nowrap">
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
