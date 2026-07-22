import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="text-center p-6 border border-gold-100 hover:border-gold-300 transition-colors"
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal-700 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center">
                  <span className="font-serif text-gold-700 font-medium">
                    {testimonial.initial}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-charcoal-800 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-charcoal-500">Verified Customer</p>
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