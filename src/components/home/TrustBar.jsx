import { Truck, RotateCcw, Award, Heart } from 'lucide-react';
import { trustItems } from '../../data/products';

export default function TrustBar() {
  const icons = [Truck, RotateCcw, Award, Heart];

  return (
    <section className="bg-[#1A1918] text-[#FAF9F7] py-5">
      <div className="container-app">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-[#FAF9F7]/80"
              >
                <Icon className="w-4 h-4 text-[#C9A962]" />
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}