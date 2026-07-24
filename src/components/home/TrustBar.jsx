import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';
import { trustItems } from '../../data/products';

export default function TrustBar() {
  const icons = [Truck, RotateCcw, Gem, Heart];
  
  return (
    <section className="bg-[#F5F1EB] py-5 border-b border-[#E8E2D9]">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-[#6B635A]"
              >
                <Icon size={16} strokeWidth={1.5} className="text-[#C9A962]" />
                <span className="font-sans tracking-wide">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}