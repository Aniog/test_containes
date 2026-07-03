import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-velmora-sand/30">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl mb-4"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            What Our Customers Say
          </h2>
          <p className="text-velmora-warm-gray">
            Real reviews from the Velmora community
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 md:p-8 rounded-lg shadow-soft"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-velmora-espresso leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-velmora-gold-light rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-velmora-charcoal">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-velmora-espresso">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
