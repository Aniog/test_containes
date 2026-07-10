import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const features = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' }
];

export default function TrustBar() {
  return (
    <section className="bg-warm-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm"
            >
              <feature.icon className="w-4 h-4 text-gold" />
              <span className="text-white/90">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
