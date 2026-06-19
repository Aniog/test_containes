import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials({ testimonials: propTestimonials }) {
  const defaultTestimonials = [
    { id: 1, name: 'Sarah', initial: 'S', rating: 5, text: 'Absolutely stunning pieces. The quality is exceptional and I get compliments every time I wear them.' },
    { id: 2, name: 'Emily', initial: 'E', rating: 5, text: 'Perfect for gifting! Bought the Royal Heirloom Set for my sister and she hasn\'t taken it off since.' },
    { id: 3, name: 'Jessica', initial: 'J', rating: 5, text: 'The gold plating is beautiful and hasn\'t faded at all. Truly demi-fine jewelry done right.' },
  ];

  const displayTestimonials = propTestimonials || defaultTestimonials;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl font-light mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Loved by Our Customers
        </h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="text-center p-8 bg-white border border-velmora-border"
          >
            {/* Stars */}
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-velmora-gold fill-velmora-gold"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 leading-relaxed mb-6 italic">
              "{testimonial.text}"
            </p>

            {/* Customer Info */}
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-velmora-warm flex items-center justify-center">
                <span className="text-sm font-medium text-velmora-charcoal">
                  {testimonial.initial}
                </span>
              </div>
              <span className="text-sm font-medium tracking-wider uppercase">
                {testimonial.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
