import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="bg-warm-50 py-20 md:py-28">
      <div className="container-wide section-padding">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
            Love Notes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-900">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream-50 p-8 md:p-10 rounded-sm border border-warm-200"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm md:text-base text-warm-700 leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-6 text-xs font-semibold text-warm-900 tracking-wider uppercase">
                {t.name} {t.initial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}