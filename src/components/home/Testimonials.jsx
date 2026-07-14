import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-[var(--color-bg)]">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[var(--color-accent)] text-sm tracking-[0.3em] uppercase mb-3">
            What They Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text)]">
            Loved by Our Community
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-[var(--color-surface)] p-8 md:p-10 relative animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-8 text-6xl font-serif text-[var(--color-accent)] opacity-20 leading-none">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="star-filled"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-[var(--color-text-secondary)] leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-[var(--color-border)] pt-4">
                <p className="font-medium text-[var(--color-text)]">
                  {testimonial.name}
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  Purchased: {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
