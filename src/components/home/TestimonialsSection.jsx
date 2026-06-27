import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-3">Love Letters</p>
          <h2 className="text-3xl md:text-4xl font-serif">What Our Customers Say</h2>
          <div className="hairline w-16 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="text-center p-8 bg-white border border-velmora-200"
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-velmora-600 leading-relaxed mb-6 italic font-serif text-lg">
                "{testimonial.text}"
              </p>
              <p className="text-sm tracking-widest uppercase">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
