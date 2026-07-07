import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah',
    initial: 'S',
    rating: 5,
    text: 'Absolutely love my Velmora pieces. The quality is outstanding and they\'ve quickly become my everyday go-to jewelry.',
    location: 'New York, NY'
  },
  {
    id: 2,
    name: 'Emily',
    initial: 'E',
    rating: 5,
    text: 'I bought the Royal Heirloom Set as a gift for myself and it was the best decision. Elegant, timeless, and the packaging is beautiful.',
    location: 'Los Angeles, CA'
  },
  {
    id: 3,
    name: 'Jessica',
    initial: 'J',
    rating: 5,
    text: 'Finally, demi-fine jewelry that doesn\'t irritate my sensitive skin. The gold plating is gorgeous and has held up beautifully.',
    location: 'Chicago, IL'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-4">What Our Customers Say</h2>
        <div className="hairline w-24 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="testimonial-card p-8 border border-gold/20 hover:border-gold/40 transition-colors"
          >
            {/* Stars */}
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={18} className="text-gold fill-gold" />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-charcoal/80 font-light leading-relaxed mb-6 italic">
              "{testimonial.text}"
            </p>

            {/* Customer info */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mr-3">
                <span className="text-gold font-serif text-lg">{testimonial.initial}</span>
              </div>
              <div>
                <p className="font-sans text-sm font-medium">{testimonial.name}</p>
                <p className="text-xs text-charcoal/60">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
