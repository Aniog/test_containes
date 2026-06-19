import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-3">Real Reviews</p>
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal">Loved by Thousands</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white p-8 md:p-10 border border-beige-light">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-light fill-gold-light" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-charcoal text-sm md:text-base leading-relaxed font-serif italic">
                &ldquo;{t.text}&rdquo;
              </p>
              {/* Name */}
              <p className="text-xs tracking-widest uppercase text-charcoal-light font-medium mt-6">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}