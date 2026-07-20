import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-linen border-t border-velmora-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="font-manrope text-xs tracking-widest uppercase text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-text-dark">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-cream p-8 border border-velmora-sand hover:shadow-card-hover transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} fill="#C9A96E" className="text-velmora-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-cormorant text-lg italic text-velmora-text-dark leading-relaxed">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-velmora-sand">
                <div className="w-8 h-8 rounded-full bg-velmora-sand flex items-center justify-center">
                  <span className="font-cormorant text-sm font-medium text-velmora-text-mid">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-manrope text-xs tracking-wider text-velmora-text-mid">
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
