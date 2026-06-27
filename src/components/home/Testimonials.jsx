import { testimonials } from '@/data/products';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-dark-900 text-center mb-12 sm:mb-16">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-ivory p-6 sm:p-8 border border-warm-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-dark-700 text-sm leading-relaxed font-sans mb-6">
                "{t.text}"
              </p>
              <p className="text-dark-900 text-sm font-medium font-sans tracking-wide">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
