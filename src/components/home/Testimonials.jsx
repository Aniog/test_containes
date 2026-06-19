import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-charcoal">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-brand-cream p-8 md:p-10 text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-brand-gold fill-brand-gold"
                  />
                ))}
              </div>
              <p className="text-sm md:text-base text-brand-charcoal font-sans leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="mt-5 text-xs tracking-extra-wide uppercase font-sans text-brand-muted">
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
