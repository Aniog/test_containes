import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">Reviews</p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso tracking-wide">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-ivory-dark p-6 md:p-8 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={12} className="fill-gold text-gold" strokeWidth={0} />
                ))}
              </div>

              {/* Quote */}
              <p className="font-cormorant text-lg md:text-xl italic text-espresso-light leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-gold" />

              {/* Name */}
              <p className="font-inter text-xs uppercase tracking-[0.12em] text-stone">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
