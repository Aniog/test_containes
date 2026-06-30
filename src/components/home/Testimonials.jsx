import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
            Love Letters
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 md:p-8 bg-ivory rounded-sm border border-border-light"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-sans text-sm text-charcoal leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border-light">
                <div className="w-9 h-9 rounded-full bg-champagne flex items-center justify-center">
                  <span className="font-serif text-sm font-medium text-charcoal">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-charcoal">
                    {t.name}
                  </p>
                  <p className="font-sans text-[11px] text-warm-gray">
                    Verified Buyer · {t.product}
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
