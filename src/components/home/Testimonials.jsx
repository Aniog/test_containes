import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-cream)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-3">
            Reviews
          </p>
          <h2 
            className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            What Our Customers Say
          </h2>
          <hr className="w-16 mx-auto mt-4 border-[var(--color-gold)]" />
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="bg-[var(--color-ivory)] p-6 md:p-8 rounded"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]"
                  />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-[var(--color-charcoal)] leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-sand)] flex items-center justify-center">
                  <span className="text-sm font-medium text-[var(--color-warm-gray)]">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--color-charcoal)]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[var(--color-taupe)]">
                    Verified Purchase
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
