import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-cream)]">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl" style={{ color: 'var(--color-charcoal)' }}>
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-[var(--color-warm-white)] p-8 text-center animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    fill={i < testimonial.rating ? 'var(--color-gold)' : 'none'}
                    style={{ color: 'var(--color-gold)' }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-charcoal)' }}>
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="font-sans text-xs font-semibold tracking-wider uppercase" style={{ color: 'var(--color-muted)' }}>
                {testimonial.initials}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;