import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--velmora-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="velmora-heading text-3xl md:text-4xl text-center mb-3">What Our Customers Say</h2>
        <div className="velmora-divider-thin w-16 mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-[var(--velmora-bg)] p-8 text-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[var(--velmora-star)] text-[var(--velmora-star)]" />
                ))}
              </div>
              <p className="text-[var(--velmora-text-muted)] text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <p className="velmora-heading text-sm tracking-wide">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
