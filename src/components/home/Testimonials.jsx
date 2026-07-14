import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-[#fafaf8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-3 tracking-wide">
            What Our Customers Say
          </h2>
          <p className="text-[#5c5c5c]">Real reviews from real customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 md:p-8 rounded-lg border border-[#e5e5e5] hover:border-[#b8860b]/30 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#b8860b] fill-[#b8860b]" />
                ))}
              </div>
              <p className="text-[#5c5c5c] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <p className="font-medium text-[#1a1a1a] text-sm">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
