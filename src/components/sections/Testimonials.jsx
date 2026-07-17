import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--color-accent)] mb-3">
            What Our Customers Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-dark)]">
            Loved by Thousands
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[var(--color-surface)] p-8 border border-[var(--color-border)]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[var(--color-accent)] text-[var(--color-accent)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg text-[var(--color-dark)] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-[var(--color-border)] pt-4">
                <p className="font-sans text-sm font-medium text-[var(--color-dark)]">
                  {testimonial.name}
                </p>
                <p className="font-sans text-xs text-[var(--color-secondary)] mt-1">
                  Purchased: {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
