import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-charcoal)] mb-4">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[var(--color-cream-dark)] p-8 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-[var(--color-gold)] text-[var(--color-gold)]'
                        : 'text-[var(--color-taupe-light)]'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[var(--color-charcoal-light)] italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[var(--color-gold)] text-white flex items-center justify-center text-xs font-medium">
                  {testimonial.initials}
                </span>
                <span className="text-sm font-medium text-[var(--color-charcoal)]">
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