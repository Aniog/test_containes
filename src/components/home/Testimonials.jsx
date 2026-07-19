import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-accent)] mb-3">Reviews</p>
          <h2 className="velmora-serif text-3xl sm:text-4xl text-[var(--velmora-dark)]">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[var(--velmora-surface)] p-6 sm:p-8 border border-[var(--velmora-border-light)]"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--velmora-star)] text-[var(--velmora-star)]" />
                ))}
              </div>
              <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <p className="text-sm font-medium text-[var(--velmora-dark)]">
                {testimonial.name}
              </p>
              <p className="text-xs text-[var(--velmora-text-light)] mt-1">Verified Purchase</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
