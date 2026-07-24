import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold mb-3">
            Loved by You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-espresso tracking-wide">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-warmgray p-8 md:p-10 text-center"
            >
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-taupe text-sm leading-relaxed italic mb-6">
                "{t.text}"
              </p>
              <div className="w-8 h-px bg-borderline mx-auto mb-4" />
              <p className="font-serif text-espresso text-sm tracking-wide">
                {t.name} {t.initial}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}