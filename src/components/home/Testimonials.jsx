import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl text-velmora-obsidian font-light">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-cream p-8 lg:p-10 border border-velmora-gold/10 hover:border-velmora-gold/25 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-velmora-gold fill-velmora-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-cormorant text-lg lg:text-xl text-velmora-charcoal leading-relaxed italic mb-6">
                "{t.text}"
              </blockquote>

              {/* Divider */}
              <div className="w-8 h-px bg-velmora-gold/40 mb-4" />

              {/* Author */}
              <p className="font-manrope text-xs uppercase tracking-widest text-velmora-stone">
                — {t.name}
              </p>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-velmora-gold fill-velmora-gold" />
            ))}
          </div>
          <p className="font-manrope text-xs text-velmora-stone uppercase tracking-widest">
            4.9 / 5 · Based on 461 reviews
          </p>
        </div>
      </div>
    </section>
  );
}
