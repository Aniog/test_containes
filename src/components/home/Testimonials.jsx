import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-manrope text-xs uppercase tracking-[0.15em] text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-obsidian">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="flex flex-col"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-cormorant text-xl font-light text-obsidian leading-relaxed italic flex-1 mb-6">
                "{t.text}"
              </blockquote>

              {/* Divider */}
              <div className="w-8 h-px bg-gold mb-4" />

              {/* Author */}
              <p className="font-manrope text-xs uppercase tracking-[0.12em] text-mink">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
