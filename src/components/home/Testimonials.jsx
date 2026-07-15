import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest uppercase text-ink-400 mb-3">
            Kind Words
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink-900 font-light">
            What Our Customers Say
          </h2>
          <div className="w-12 h-[1px] bg-gold-500 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream-50 p-6 md:p-8 rounded-sm border border-ink-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>
              <p className="text-ink-600 text-sm leading-relaxed font-sans italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-sm font-sans text-ink-800 font-medium">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}