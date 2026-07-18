import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Testimonials() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 bg-velmora-charcoal fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-caption uppercase tracking-mega-wide text-velmora-gold mb-3">
            What She Said
          </p>
          <h2 className="font-serif text-heading-1 md:text-display text-velmora-cream">
            Customer Love
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-velmora-dark/50 border border-velmora-gold/10 p-8 md:p-10"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-velmora-gold/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="font-sans text-body text-velmora-cream/80 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Customer info */}
              <div className="border-t border-velmora-gold/10 pt-4">
                <p className="font-sans text-body font-medium text-velmora-cream">
                  {testimonial.name}
                </p>
                <p className="font-sans text-caption text-velmora-cream/40 mt-1">
                  on {testimonial.product}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-velmora-gold/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
