import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-3">What Our Clients Say</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="text-center p-8"
              style={{ backgroundColor: 'var(--color-warm-white)' }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    fill="currentColor"
                    style={{ color: 'var(--color-gold)' }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="font-sans text-base leading-relaxed mb-6 italic"
                style={{ color: 'var(--color-charcoal)' }}
              >
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p
                  className="font-sans text-sm font-medium"
                  style={{ color: 'var(--color-charcoal)' }}
                >
                  {testimonial.name}
                </p>
                <p
                  className="font-sans text-xs mt-1"
                  style={{ color: 'var(--color-muted-light)' }}
                >
                  {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}