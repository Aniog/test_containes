import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';
import { trustItems } from '@/data/products';

const TrustBar = () => {
  const icons = [Truck, RotateCcw, Shield, Heart];

  return (
    <div className="bg-dark text-dark-text/80 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
          {trustItems.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="flex items-center gap-2 text-xs sm:text-sm tracking-wide">
                <Icon className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
