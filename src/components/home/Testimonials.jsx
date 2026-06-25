import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-parchment)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[var(--color-gold)] text-sm tracking-[0.3em] uppercase mb-3">
            Love Letters
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)]">
            What Our Community Says
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-[var(--color-ivory)] p-8 md:p-10 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Mark */}
              <span className="absolute top-4 right-6 font-serif text-6xl text-[var(--color-sand)] leading-none">
                "
              </span>
              
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[var(--color-gold)] fill-current"
                  />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-[var(--color-charcoal)] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              {/* Attribution */}
              <div className="border-t border-[var(--color-sand)] pt-4">
                <p className="font-medium text-[var(--color-charcoal)]">
                  {testimonial.name}
                </p>
                <p className="text-sm text-[var(--color-stone)]">
                  Verified Purchase
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
