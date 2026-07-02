import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto container-px">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-overline mb-3">What They Say</p>
          <h2 className="font-serif text-display-sm md:text-[3.5rem] text-charcoal">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-warm-white rounded-lg p-8 md:p-10 shadow-card hover:shadow-card-hover transition-shadow duration-500"
            >
              <Quote className="w-8 h-8 text-gold-pale mb-4" strokeWidth={1} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="font-sans text-body text-charcoal/80 leading-relaxed mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 border-t border-border pt-5">
                <div className="w-10 h-10 rounded-full bg-gold-pale/40 flex items-center justify-center">
                  <span className="font-serif text-sm text-gold font-medium">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-[13px] font-medium text-charcoal">{t.name}</p>
                  <p className="font-sans text-[11px] text-warm-gray">Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
