import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-serif text-3xl md:text-4xl text-brand-charcoal font-light mb-3">
            Loved by Thousands
          </h2>
          <div className="w-12 h-0.5 bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-brand-warm p-8 border border-brand-cream-dark"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="font-serif text-base text-brand-charcoal leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-sans text-sm font-medium text-brand-charcoal uppercase tracking-wider">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}