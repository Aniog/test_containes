import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.28em] uppercase text-ink-400 mb-3">
            Loved by You
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center">
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-ink-500 text-sm leading-relaxed italic mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-serif text-sm tracking-wider uppercase text-ink-800">
                {t.name} {t.initial}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}