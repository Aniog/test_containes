import React from 'react';
import { Star, User } from 'lucide-react';
import { testimonials } from '../data/products';

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">What Our Customers Say</h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 lg:p-10 shadow-premium hover:shadow-premium-lg transition-shadow duration-300"
            >
              {/* Star Rating */}
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-velmora-gold fill-velmora-gold"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-velmora-gray-600 leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-velmora-gold flex items-center justify-center text-white font-medium">
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-medium text-velmora-charcoal">{testimonial.name}</p>
                  <p className="text-sm text-velmora-gray-500">Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
