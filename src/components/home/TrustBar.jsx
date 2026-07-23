import { trustItems } from '@/data/products';
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const icons = [Truck, RotateCcw, Shield, Heart];

export default function TrustBar() {
  return (
    <div className="bg-stone-100 border-y border-stone-200">
      <div className="container-wide py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trustItems.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="flex items-center justify-center gap-2 text-stone-600">
                <Icon size={16} className="text-amber-700 flex-shrink-0" />
                <span className="text-xs md:text-sm tracking-wide">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
