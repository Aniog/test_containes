import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="text-center px-4">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold" fill="currentColor" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-stone leading-relaxed font-sans text-sm md:text-base italic">
                "{t.text}"
              </p>
              {/* Name */}
              <p className="mt-4 text-xs uppercase tracking-widest text-charcoal font-sans font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
