import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#f3f0eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-3">Testimonials</p>
          <h2 className="velmora-heading text-3xl sm:text-4xl tracking-[0.1em]">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-white p-6 sm:p-8 text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#d4a853] fill-[#d4a853]" />
                ))}
              </div>
              <p className="text-[#6b6560] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="velmora-divider w-12 mx-auto mb-4" />
              <p className="velmora-heading text-sm tracking-[0.1em]">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
