import { Truck, RotateCcw, Sparkles, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

const TrustBar = () => {
  return (
    <section className="bg-velmora-cream border-b border-velmora-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 md:gap-3"
            >
              <item.icon className="w-4 h-4 text-velmora-gold flex-shrink-0" />
              <span className="text-[11px] md:text-xs uppercase tracking-[0.1em] text-velmora-charcoal">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
