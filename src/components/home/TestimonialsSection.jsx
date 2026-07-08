import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-cream border-t border-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-manrope text-[10px] uppercase tracking-[0.2em] text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-parchment p-8 md:p-10 flex flex-col gap-5 hover:shadow-[0_8px_32px_rgba(26,23,20,0.06)] transition-shadow duration-500"
            >
              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} fill="#C9A96E" stroke="none" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-cormorant text-lg font-light text-ink leading-relaxed italic flex-1">
                "{t.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-linen">
                <div className="w-8 h-8 rounded-full bg-gold-muted flex items-center justify-center">
                  <span className="font-cormorant text-sm font-medium text-gold-dark">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-manrope text-xs uppercase tracking-[0.12em] text-ink-muted">
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
