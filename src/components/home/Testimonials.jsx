import React from 'react';
import { Star } from 'lucide-react';
import testimonials from '../../data/testimonials';

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
            Loved by Our Customers
          </h2>
          <div className="w-24 h-px bg-velmora-gold mx-auto mb-6" />
          <p className="text-velmora-graphite max-w-2xl mx-auto leading-relaxed">
            Real reviews from women who have made Velmora part of their everyday luxury.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-cream p-8 md:p-10 rounded-lg space-y-6 hover:shadow-premium transition-shadow duration-500"
            >
              {/* Stars */}
              <div className="flex items-center space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-velmora-gold fill-velmora-gold"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-velmora-graphite leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4 pt-4 border-t border-velmora-warm">
                {/* Avatar with initial */}
                <div className="w-12 h-12 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="text-velmora-gold font-serif text-lg">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-velmora-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-velmora-mist">
                    Verified Buyer
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
