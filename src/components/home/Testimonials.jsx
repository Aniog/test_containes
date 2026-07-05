import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-brand-ivory">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-white p-8 md:p-10">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              <p className="font-sans text-sm text-brand-muted leading-relaxed italic">
                "{t.text}"
              </p>

              <p className="font-sans text-xs text-brand-charcoal font-medium mt-6 uppercase tracking-wider">
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
