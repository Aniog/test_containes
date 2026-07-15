import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';
import useScrollReveal from '../../hooks/useScrollReveal';

const Testimonials = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-[#8B8178]">
            Real stories from our community of jewelry lovers
          </p>
        </div>

        {/* Testimonial Cards */}
        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 transition-all duration-700 delay-200 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 md:p-8 rounded-lg card-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#C9A962] text-[#C9A962]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#1A1A1A] leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center">
                  <span className="font-serif text-[#8B8178]">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm text-[#1A1A1A]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#8B8178]">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
