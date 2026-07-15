import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-3">Reviews</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-espresso tracking-wide">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="fill-gold text-gold" strokeWidth={0} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-cormorant text-xl font-light text-espresso leading-relaxed italic flex-1 mb-6">
                "{t.text}"
              </blockquote>

              {/* Divider */}
              <div className="w-8 h-px bg-gold mb-5" />

              {/* Author */}
              <p className="font-inter text-xs uppercase tracking-[0.14em] text-taupe">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
