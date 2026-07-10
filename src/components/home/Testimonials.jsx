import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-button uppercase text-gold mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light">What They're Saying</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-linen px-8 py-8 border border-sand/60 hover:shadow-gold-glow transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} style={{ fill: '#C9A96E', color: '#C9A96E' }} />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg text-obsidian font-light leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Attribution */}
              <div className="hairline pt-5">
                <p className="font-sans text-xs tracking-button uppercase text-obsidian font-medium">
                  {t.name}
                </p>
                <p className="font-sans text-xs text-muted mt-0.5">Verified Purchase · {t.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
