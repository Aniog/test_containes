import React from 'react';
import { testimonials } from '../../data/products';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">Loved by Our Customers</h2>
        <p className="text-center text-gray-600 mb-12 tracking-wide">Real reviews from real customers</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 space-y-4">
              {/* Stars */}
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#B8860B] text-[#B8860B]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>

              {/* Customer */}
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-[#B8860B] text-white rounded-full flex items-center justify-center font-medium">
                  {testimonial.initial}
                </div>
                <span className="text-sm font-medium">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
