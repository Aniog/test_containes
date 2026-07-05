import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/products';

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">What Our Customers Say</h2>
        <div className="w-16 h-0.5 bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="bg-ivory p-8 text-center space-y-4"
          >
            {/* Star Rating */}
            <div className="flex justify-center gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star 
                  key={i}
                  size={18} 
                  className="text-gold fill-gold"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-charcoal-light leading-relaxed italic">
              "{testimonial.text}"
            </p>

            {/* Customer Info */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center font-medium">
                {testimonial.initial}
              </div>
              <div className="text-left">
                <p className="font-medium text-sm">{testimonial.name}</p>
                <p className="text-xs text-stone">Verified Buyer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;