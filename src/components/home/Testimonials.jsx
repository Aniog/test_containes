import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase text-gold font-sans mb-3">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">What They're Saying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="flex flex-col gap-5 p-8 bg-parchment border border-warm-gray-light/20"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5" style={{ fill: '#C9A96E', color: '#C9A96E' }} />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg text-charcoal leading-relaxed italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="mt-auto pt-4 border-t border-warm-gray-light/30">
                <p className="text-xs tracking-widest uppercase text-warm-gray font-sans">{t.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
