import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Testimonials() {
  const [sectionRef, revealed] = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 id="testimonials-heading" className="font-serif text-3xl md:text-4xl text-velmora-charcoal font-light tracking-wide">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(testimonial => (
            <blockquote key={testimonial.id} className="text-center">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" aria-hidden="true" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-base md:text-lg text-velmora-charcoal italic leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Name */}
              <footer className="mt-4">
                <cite className="text-xs font-sans font-semibold tracking-product uppercase text-velmora-muted not-italic">
                  {testimonial.name}
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
