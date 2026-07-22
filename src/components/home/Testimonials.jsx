import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-espresso">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="flex flex-col gap-5 p-8 border border-stone-light/50 bg-cream-dark">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-cormorant text-lg italic text-espresso leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-stone-light/50">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-cormorant text-sm text-gold font-medium">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-inter text-xs uppercase tracking-widest text-stone">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
