import React from 'react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">What Our Customers Say</h2>
        <div className="divider-hairline w-16 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-8 text-center hover:shadow-premium transition-shadow duration-300"
          >
            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-[#C9A96E]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-[#8A8580] italic mb-6 leading-relaxed">
              "{testimonial.text}"
            </p>

            {/* Customer Info */}
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#F5F0EB] flex items-center justify-center">
                <span className="text-[#C9A96E] font-serif text-lg">
                  {testimonial.initial}
                </span>
              </div>
              <div>
                <p className="font-medium text-sm">{testimonial.name}</p>
                <p className="text-xs text-[#8A8580]">
                  Verified Buyer
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
