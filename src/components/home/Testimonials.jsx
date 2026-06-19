import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--color-ivory)' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="font-serif text-3xl md:text-4xl mb-3"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-espresso)' }}
          >
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 md:p-8 text-center"
              style={{
                backgroundColor: 'var(--color-cream)',
              }}
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current"
                    style={{ color: 'var(--color-gold)' }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: 'var(--color-walnut)' }}
              >
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p
                  className="font-medium text-sm"
                  style={{ color: 'var(--color-espresso)' }}
                >
                  {testimonial.name}
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--color-taupe)' }}>
                  on {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}