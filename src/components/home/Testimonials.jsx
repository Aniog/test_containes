import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-champagne text-sm tracking-[0.3em] uppercase mb-3">
            Love Letters
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-cream p-8 relative"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Quote mark */}
              <span className="absolute top-4 right-6 font-serif text-6xl text-champagne/20 leading-none">
                "
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-champagne text-champagne"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-cocoa italic leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-champagne/20 pt-4">
                <p className="font-medium text-espresso">
                  {testimonial.name}
                </p>
                <p className="text-sm text-silk">
                  on {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
