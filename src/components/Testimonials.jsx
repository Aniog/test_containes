import React from 'react';
import { testimonials } from '../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-light mb-4">What Our Customers Say</h2>
          <div className="w-16 h-px bg-[#C9A96E] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 text-center">
              <div className="flex justify-center text-[#C9A96E] text-xl mb-4">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="text-[#2C2C2C] italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#E5DFD9] flex items-center justify-center">
                  <span className="text-[#C9A96E] font-serif text-lg">
                    {testimonial.initial}
                  </span>
                </div>
                <span className="font-serif text-[#2C2C2C]">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
