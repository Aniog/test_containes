import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="bg-obsidian py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold mb-3">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-warm-white tracking-wide">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-charcoal border border-gold/10 p-8 flex flex-col gap-5 hover:border-gold/25 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-base md:text-lg font-light text-warm-white/85 leading-relaxed italic flex-1">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-gold/10">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-serif text-sm text-gold">{t.name[0]}</span>
                </div>
                <span className="font-sans text-xs uppercase tracking-[0.1em] text-stone">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
