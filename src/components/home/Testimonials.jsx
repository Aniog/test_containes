import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[var(--velmora-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] mb-3">What They Say</p>
          <h2 className="velmora-heading text-3xl sm:text-4xl">Loved by Thousands</h2>
          <div className="velmora-divider-thin w-16 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[var(--velmora-cream)] p-6 sm:p-8 border border-[var(--velmora-border-light)]"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--velmora-accent)] text-[var(--velmora-accent)]" />
                ))}
              </div>
              <p className="text-[var(--velmora-text)] leading-relaxed mb-6 italic velmora-heading text-lg">
                "{testimonial.text}"
              </p>
              <p className="text-sm text-[var(--velmora-text-muted)]">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
