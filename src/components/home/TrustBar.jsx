import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const features = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-bg-warm py-4 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.text}
              className="flex items-center gap-2 text-secondary"
            >
              <feature.icon className="w-4 h-4 text-accent" />
              <span className="text-xs md:text-sm font-medium tracking-wide">
                {feature.text}
              </span>
              {index < features.length - 1 && (
                <span className="hidden md:block w-px h-4 bg-border ml-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
