import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';
import { trustItems } from '@/data/products';

const icons = {
  'Free Worldwide Shipping': Truck,
  '30-Day Returns': RotateCcw,
  '18K Gold Plated': Gem,
  'Hypoallergenic': Heart,
};

export default function TrustBar() {
  return (
    <section className="bg-champagne py-5 border-y border-silk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item) => {
            const Icon = icons[item];
            return (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-cocoa"
              >
                <Icon className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
