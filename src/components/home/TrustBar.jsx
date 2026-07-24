import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';
import { trustItems } from '../../data/products';

export default function TrustBar() {
  const icons = [Truck, RotateCcw, Gem, Heart];
  
  return (
    <section className="bg-[var(--color-cream-dark)] py-5 border-b border-[var(--color-charcoal)] border-opacity-5">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-[var(--color-charcoal)] opacity-80"
              >
                <Icon size={16} strokeWidth={1.5} className="text-[var(--color-warm-gold)]" />
                <span className="font-sans tracking-wide">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}