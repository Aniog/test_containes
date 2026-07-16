import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-taupe text-xs tracking-[0.25em] uppercase font-sans mb-2">
            Kind Words
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-dark-forest">
            Loved by Thousands
          </h2>
          <div className="w-12 h-[1px] bg-warm-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-warm-beige/60 rounded-sm p-6 md:p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-muted-gold fill-muted-gold"
                  />
                ))}
              </div>
              <p className="text-sm text-taupe leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs text-dark-forest font-medium mt-4 tracking-wider uppercase font-sans">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}