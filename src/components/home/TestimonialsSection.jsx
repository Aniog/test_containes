import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-[var(--velmora-cream)]">
      <div className="max-w-7xl mx-auto">
        <h2 className="serif-heading text-3xl md:text-4xl text-center mb-12 md:mb-16">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-[var(--velmora-gold)] fill-[var(--velmora-gold)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="serif-heading text-lg md:text-xl leading-relaxed mb-6 text-[var(--velmora-text)]">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <p className="text-sm text-[var(--velmora-text-muted)] tracking-wide">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
