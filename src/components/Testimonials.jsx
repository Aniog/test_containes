import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/products';

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">
          Loved by Our Community
        </h2>
        <div className="hairline w-24 mx-auto mb-4" />
        <p className="text-velmora-gray-500">
          Real reviews from real customers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-velmora-gray-100 p-8 text-center hover:shadow-lg transition-shadow duration-300"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-velmora-gold text-velmora-gold"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg mb-6 italic font-serif leading-relaxed">
              "{testimonial.text}"
            </p>

            {/* Customer Info */}
            <div className="flex items-center justify-center gap-3">
              {/* Initial Avatar */}
              <div className="w-10 h-10 rounded-full bg-velmora-gold flex items-center justify-center">
                <span className="text-white font-medium text-sm">
                  {testimonial.initial}
                </span>
              </div>
              <span className="font-medium text-sm tracking-wide uppercase">
                {testimonial.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
