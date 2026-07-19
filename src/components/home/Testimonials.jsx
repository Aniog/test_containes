import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">
            From Our Community
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-velmora-espresso">
            What They Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="text-center px-4 md:px-6 py-8 bg-white rounded-sm border border-velmora-border/50"
            >
              <div className="flex items-center justify-center gap-0.5 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>
              <p className="font-serif text-base md:text-lg italic text-velmora-espresso leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="w-8 h-[1px] bg-velmora-gold mx-auto my-5" />
              <p className="font-sans text-xs font-medium tracking-wider uppercase text-velmora-warmgray">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
