import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--velmora-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--velmora-text-muted)] mb-2">What They Say</p>
          <h2 className="section-title">Loved by Thousands</h2>
          <div className="hairline w-16 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[var(--velmora-card)] p-6 lg:p-8 text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[var(--velmora-star)] text-[var(--velmora-star)]" />
                ))}
              </div>
              <p className="text-[var(--velmora-text)] leading-relaxed mb-6 italic font-serif-display text-lg">
                "{testimonial.text}"
              </p>
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-text-muted)]">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
