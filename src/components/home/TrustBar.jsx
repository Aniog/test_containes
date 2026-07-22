import { Truck, RefreshCw, Sparkles, Heart } from 'lucide-react';
import { trustItems } from '@/data/products';

const icons = {
  truck: Truck,
  refresh: RefreshCw,
  sparkles: Sparkles,
  heart: Heart,
};

export default function TrustBar() {
  return (
    <section className="bg-creamLight border-y border-border py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
          {trustItems.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <div
                key={item.text}
                className="flex items-center gap-2 text-xs uppercase tracking-wider text-warmGray"
              >
                <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                <span>{item.text}</span>
                {index < trustItems.length - 1 && (
                  <span className="hidden sm:inline text-border ml-4">·</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}