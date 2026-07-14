import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-[var(--color-cream)]">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl tracking-wide">What Our Clients Say</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[var(--color-ivory)] p-8 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    strokeWidth={1}
                    className={i < testimonial.rating ? 'fill-[var(--color-gold)] text-[var(--color-gold)]' : 'text-[var(--color-border)]'}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[var(--color-charcoal)] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="font-sans text-sm font-medium text-[var(--color-muted)]">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
