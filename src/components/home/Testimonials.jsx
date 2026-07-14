import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="bg-velmora-linen py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest-xl uppercase text-velmora-gold mb-3">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-text-primary">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="bg-velmora-cream p-8 border border-velmora-sand flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg italic text-velmora-text-primary leading-relaxed flex-1 mb-6">
                "{t.text}"
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-velmora-gold mb-4" />

              {/* Name */}
              <p className="font-sans text-xs tracking-widest uppercase text-velmora-text-muted">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
