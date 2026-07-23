import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-3">What They Say</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-ink font-light">Loved by Thousands</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-cream p-8 md:p-10 border border-linen hover:border-gold/30 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={12} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote mark */}
              <p className="font-cormorant text-5xl text-gold/30 leading-none mb-2 -mt-2">"</p>

              {/* Text */}
              <p className="font-cormorant text-lg text-ink leading-relaxed italic mb-6">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-linen">
                <div className="w-8 h-8 rounded-full bg-linen flex items-center justify-center">
                  <span className="font-cormorant text-sm text-muted font-medium">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <p className="font-manrope text-xs tracking-widest uppercase text-muted">{t.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="text-center mt-10">
          <div className="flex items-center justify-center gap-2 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-gold fill-gold" />
            ))}
          </div>
          <p className="font-manrope text-xs text-muted tracking-wide">
            4.8 out of 5 · Based on 435 reviews
          </p>
        </div>
      </div>
    </section>
  );
}
