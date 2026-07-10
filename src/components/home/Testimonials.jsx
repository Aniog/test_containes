import React from 'react';
import { Star, User } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: 'Absolutely in love with my Vivid Aura ear cuff! The quality is incredible for the price point. I get compliments every time I wear it.',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: 'The Majestic Flora necklace is even more beautiful in person. Delicate, feminine, and the perfect length. Will definitely be ordering again!',
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Jessica',
      initial: 'J',
      rating: 5,
      text: 'Finally found huggie earrings that don\'t irritate my sensitive ears! The Golden Sphere Huggies are now my everyday go-to. Thank you, Velmora!',
      date: '3 weeks ago'
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Loved by Our Community</h2>
          <p className="font-sans text-gray-warm">
            Real reviews from real customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream p-8 space-y-6"
            >
              {/* Stars */}
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-gold fill-gold"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="font-sans text-charcoal leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-border">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <span className="font-serif text-gold text-lg font-medium">
                    {testimonial.initial}
                  </span>
                </div>

                {/* Name and Date */}
                <div>
                  <p className="font-sans font-medium text-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-xs text-gray-warm">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}