import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-charcoal)]">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="text-center p-8 bg-[var(--color-cream-dark)] animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="var(--color-warm-gold)"
                    stroke="var(--color-warm-gold)"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg text-[var(--color-charcoal)] italic leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-warm-gold)] flex items-center justify-center">
                  <span className="font-serif text-sm text-[var(--color-charcoal)]">
                    {testimonial.initials}
                  </span>
                </div>
                <span className="font-sans text-sm text-[var(--color-charcoal)]">
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