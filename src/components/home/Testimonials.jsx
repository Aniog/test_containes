import React from 'react';
import { Star, User } from 'lucide-react';
import { testimonials } from '../../data/products';

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">What Our Customers Say</h2>
        <div className="elegant-divider w-24 mx-auto my-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-8 text-center hover:shadow-lg transition-shadow duration-300"
          >
            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-velmora-gold fill-velmora-gold"
                />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-velmora-charcoal-light italic mb-6 leading-relaxed">
              "{testimonial.text}"
            </p>

            {/* Customer info */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-velmora-warm flex items-center justify-center">
                <span className="font-serif text-velmora-gold text-lg">
                  {testimonial.initial}
                </span>
              </div>
              <span className="font-serif text-lg">{testimonial.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;