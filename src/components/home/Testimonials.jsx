import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-12 md:mb-16">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map(t => (
            <div key={t.id} className="text-center">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-sm md:text-base text-charcoal leading-relaxed font-sans italic">
                "{t.text}"
              </p>
              {/* Name */}
              <p className="mt-4 text-xs uppercase tracking-ultra-wide font-sans text-taupe font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
