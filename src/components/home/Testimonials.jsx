import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section bg-[var(--color-charcoal)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-3">
            Love Letters
          </p>
          <h2 className="heading-2 text-[var(--color-cream)]">What Our Clients Say</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.id}
              className="bg-[var(--color-espresso)] p-8 rounded-lg"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-[var(--color-gold)] text-[var(--color-gold)]'
                        : 'text-[var(--color-warm-gray)]'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif italic text-[var(--color-cream)] leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Attribution */}
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--color-gold)] rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-[var(--color-espresso)]">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-[var(--color-cream)]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[var(--color-taupe)]">
                    {testimonial.product}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
