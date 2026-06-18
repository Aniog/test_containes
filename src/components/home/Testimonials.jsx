import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14 md:mb-20 max-w-2xl mx-auto">
          <p className="text-[11px] uppercase tracking-eyebrow text-gold font-medium">
            Reviews
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl font-light text-espresso leading-tight">
            What our community is saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="bg-cream p-8 md:p-10 flex flex-col"
            >
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-6 font-serif text-xl md:text-2xl text-espresso leading-snug font-light flex-1">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-8 text-xs uppercase tracking-eyebrow text-mocha font-medium">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
