import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-widest uppercase font-sans font-medium text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-obsidian font-light">
            What They're Saying
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-cream p-8 md:p-10 flex flex-col gap-5 border border-linen"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={12} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg md:text-xl text-obsidian font-light leading-relaxed italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-linen">
                <div className="w-8 h-8 rounded-full bg-linen flex items-center justify-center">
                  <span className="text-xs font-sans font-semibold text-muted">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="text-xs tracking-wider uppercase font-sans font-medium text-muted">
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
