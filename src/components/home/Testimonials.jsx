import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream border-t border-mist">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">
            Customer Love
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velvet">
            What They're Saying
          </h2>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-gold text-gold" strokeWidth={0} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg md:text-xl font-light text-velvet leading-relaxed flex-1 mb-6">
                "{t.text}"
              </blockquote>

              {/* Divider */}
              <div className="w-8 h-px bg-gold mb-5" />

              {/* Attribution */}
              <div>
                <p className="font-sans text-sm font-medium text-velvet">{t.name}</p>
                <p className="font-sans text-xs text-stone mt-0.5">Verified Purchase · {t.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
