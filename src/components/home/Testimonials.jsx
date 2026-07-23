import React from 'react';
import { testimonials } from '../../data/products';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl text-center mb-4">What Our Customers Say</h2>
        <p className="text-center text-velmora-warm-gray mb-12 tracking-wide">
          Real reviews from the Velmora community
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-8 shadow-luxury">
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a96e" className="text-velmora-gold" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-velmora-charcoal mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-velmora-light-gray flex items-center justify-center">
                  <span className="text-velmora-gold font-serif text-lg">
                    {testimonial.initial}
                  </span>
                </div>
                <span className="font-medium text-sm">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
