import { trustItems } from '@/data/testimonials';
import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const icons = {
  'Free Worldwide Shipping': Truck,
  '30-Day Returns': RotateCcw,
  '18K Gold Plated': Gem,
  'Hypoallergenic': Heart,
};

export function TrustBar() {
  return (
    <section className="bg-charcoal-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-6 md:gap-12">
          {trustItems.map((item) => {
            const Icon = icons[item];
            return (
              <div
                key={item}
                className="flex items-center gap-2 text-cream-100/80"
              >
                <Icon className="w-4 h-4 text-gold-400" />
                <span className="font-sans text-xs tracking-wider uppercase">
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
