import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="font-sans text-xs tracking-widest uppercase text-taupe text-center mb-3">
          Loved By You
        </p>
        <h2 className="serif-heading text-3xl md:text-4xl text-center text-espresso mb-14">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center max-w-sm mx-auto">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-warmgold text-warmgold" />
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl text-espresso italic leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-sans text-xs tracking-wider uppercase text-taupe">
                {t.name} {t.initial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
