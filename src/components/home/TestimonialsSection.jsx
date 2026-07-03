// Velmora Fine Jewelry - Testimonials Section
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/products';

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-[#FAF8F5]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs uppercase tracking-[0.3em] text-[#B8860B] mb-3"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            What Our Customers Say
          </p>
          <h2
            className="text-3xl md:text-4xl text-[#1A1A1A] font-normal"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Love Letters
          </h2>
          <div className="divider-gold mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <Quote size={32} className="text-[#B8860B]/20 mb-4" strokeWidth={1} />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-[#B8860B] fill-[#B8860B]"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              
              {/* Quote Text */}
              <p
                className="text-[#6B6560] text-sm leading-relaxed mb-6 italic"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '17px' }}
              >
                "{testimonial.text}"
              </p>
              
              {/* Customer Info */}
              <div className="border-t border-[#E8E2D9] pt-4">
                <p
                  className="text-sm font-medium text-[#1A1A1A]"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {testimonial.name}
                </p>
                <p
                  className="text-xs text-[#6B6560] mt-1"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Purchased: {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
