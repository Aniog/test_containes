import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-14">
          <p className="text-gold text-xs tracking-widest uppercase font-sans font-medium mb-3">
            Real Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-charcoal">
            Loved by Our Customers
          </h2>
          <div className="w-16 h-0.5 bg-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-sm border border-border-light hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-warm-gray-500 font-sans text-sm leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-sm font-serif font-semibold text-charcoal">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}