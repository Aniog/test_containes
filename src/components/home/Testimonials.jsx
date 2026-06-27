import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-deep-brown)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-3">
            What They Say
          </p>
          <h2
            className="text-3xl md:text-4xl text-white"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Loved by Thousands
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[var(--color-charcoal)] p-8 md:p-10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[var(--color-gold)] fill-current"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="text-white/90 text-base leading-relaxed mb-6 italic"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-[var(--color-warm-gray)] pt-4">
                <p className="text-white font-medium">
                  {testimonial.name}
                </p>
                <p className="text-[var(--color-taupe)] text-sm mt-1">
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