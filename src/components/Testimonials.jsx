import React from 'react';
import { testimonials } from '../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 bg-velmora-warm px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Loved by Our Customers</h2>
          <div className="hairline w-24 mx-auto mb-4 border-velmora-nude" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 text-center">
              {/* Stars */}
              <div className="flex justify-center text-velmora-gold text-2xl mb-4">
                {'★'.repeat(testimonial.rating)}
              </div>

              {/* Text */}
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.text}"</p>

              {/* Customer */}
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-velmora-gold text-white flex items-center justify-center font-serif">
                  {testimonial.initial}
                </div>
                <span className="font-serif text-lg">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}