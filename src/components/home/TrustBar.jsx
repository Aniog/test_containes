import { trustItems } from '@/data/products';
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const icons = [Truck, RotateCcw, Shield, Heart];

const TrustBar = () => {
  return (
    <div className="bg-velmora-warm border-y border-velmora-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => {
            const Icon = icons[index];
            return (
              <div key={item} className="flex items-center gap-2 text-velmora-gray-dark">
                <Icon className="w-4 h-4 text-velmora-gold flex-shrink-0" />
                <span className="font-sans text-xs tracking-wider uppercase">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
