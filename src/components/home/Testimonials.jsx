import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="font-serif text-3xl md:text-4xl mb-3"
            style={{ color: 'var(--color-text-primary)' }}
          >
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="p-6 md:p-8 animate-fade-in-up"
              style={{
                backgroundColor: 'var(--color-surface)',
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="var(--color-gold)"
                    style={{ color: 'var(--color-gold)' }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-sm md:text-base leading-relaxed mb-6"
                style={{ color: 'var(--color-text-primary)' }}
              >
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
                  style={{
                    backgroundColor: 'var(--color-gold)',
                    color: 'white'
                  }}
                >
                  {testimonial.initials}
                </div>
                <span
                  className="text-sm font-medium"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}