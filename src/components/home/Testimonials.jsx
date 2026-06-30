import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[11px] uppercase tracking-[0.25em] text-accent mb-3 block">
            What They Say
          </span>
          <h2 className="section-title text-3xl md:text-4xl">Loved by You</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream-100 p-8 md:p-10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold-500 text-gold-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-charcoal-700 leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-medium text-charcoal-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-charcoal-500">
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
