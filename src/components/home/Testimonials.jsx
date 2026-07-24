import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream border-t border-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-obsidian font-light">
            What They're Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-parchment p-8 border border-linen hover:border-gold/30 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg text-obsidian leading-relaxed italic font-light">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-linen flex items-center justify-center">
                  <span className="font-serif text-sm text-gold-dark font-medium">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-obsidian font-medium">
                    {t.name}
                  </p>
                  <p className="font-sans text-[10px] text-ink-muted mt-0.5">
                    Verified Buyer
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
