import React from 'react';
import { testimonials } from '../../data/content';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 bg-[#E67E22]/10 text-[#E67E22] text-sm font-semibold rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[#6B7280]">
            Hear from businesses around the world who have transformed their China sourcing with our help.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] rounded-xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-10 h-10 bg-[#E67E22] rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#E67E22] fill-[#E67E22]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#1F2937] mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-[#E5E7EB] pt-4">
                <div className="font-semibold text-[#1E3A5F]">{testimonial.author}</div>
                <div className="text-sm text-[#6B7280]">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;