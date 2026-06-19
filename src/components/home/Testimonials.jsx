import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4" style={{ color: 'var(--color-warm-black)' }}>
            What Our Customers Say
          </h2>
          <div className="hairline max-w-20 mx-auto mb-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="text-center p-8 bg-[var(--color-ivory)] animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    fill="var(--color-gold)"
                    style={{ color: 'var(--color-gold)' }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="font-sans text-base leading-relaxed mb-6 italic"
                style={{ color: 'var(--color-warm-black)' }}
              >
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p
                className="font-sans text-sm font-medium"
                style={{ color: 'var(--color-gold-dark)' }}
              >
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}