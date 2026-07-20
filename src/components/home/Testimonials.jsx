import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">What They Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="text-center">
              {/* Stars */}
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal leading-relaxed text-sm md:text-base italic font-light">
                "{t.text}"
              </p>

              {/* Author */}
              <p className="mt-4 text-xs uppercase tracking-wider text-muted font-medium">
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
