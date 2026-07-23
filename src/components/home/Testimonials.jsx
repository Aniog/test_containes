import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-spacing bg-[var(--color-ivory)]">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)] mb-3">
            Love Letters
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">What Our Customers Say</h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[var(--color-ivory-warm)] p-6 md:p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg md:text-xl italic text-[var(--color-text-primary)] mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="text-sm text-[var(--color-text-muted)]">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
