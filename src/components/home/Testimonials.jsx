import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = ({ testimonials }) => {
  return (
    <section className="bg-charcoal text-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-light mb-4 tracking-wide">What Our Customers Say</h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-charcoal-light p-8 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-cream/80 leading-relaxed mb-6 italic font-light">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-medium">{testimonial.initial}</span>
                </div>
                <span className="text-cream font-medium tracking-wide">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
