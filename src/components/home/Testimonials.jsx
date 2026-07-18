import React from 'react';
import { Star, User } from 'lucide-react';

export default function Testimonials({ testimonials }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="font-serif text-4xl md:text-5xl text-center mb-12">What Our Customers Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-velmora-cream p-8 text-center">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={18} className="fill-velmora-gold text-velmora-gold" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.text}"</p>

            {/* Customer Info */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-velmora-gold flex items-center justify-center text-white font-serif">
                {testimonial.initial}
              </div>
              <span className="font-serif text-sm">{testimonial.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
