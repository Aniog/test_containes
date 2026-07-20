import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title mb-4">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-brand-ink leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center">
                  <span className="font-serif text-brand-gold font-semibold">{testimonial.initial}</span>
                </div>
                <span className="text-sm font-medium text-brand-ink">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
