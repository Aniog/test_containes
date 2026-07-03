// Testimonials Section Component
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: 'I absolutely love my Velmora pieces. The quality is outstanding for the price point, and they\'ve quickly become my everyday go-to jewelry.',
      date: '2 weeks ago',
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: 'Bought the Royal Heirloom Set as a gift for myself (because why not?), and I\'m so glad I did. The packaging alone made it feel so special.',
      date: '1 month ago',
    },
    {
      id: 3,
      name: 'Jessica',
      initial: 'J',
      rating: 5,
      text: 'Finally, jewelry that doesn\'t irritate my sensitive ears! The hypoallergenic claim is real. Plus, they\'re gorgeous. Already planning my next purchase.',
      date: '3 weeks ago',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">What Our Customers Say</h2>
          <div className="divider-hairline w-24 mx-auto my-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-cream p-8 rounded-lg"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-velmora-gold fill-current"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-velmora-text-secondary mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-velmora-gold rounded-full flex items-center justify-center text-white font-serif">
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-serif text-sm">{testimonial.name}</p>
                  <p className="text-xs text-velmora-text-light">{testimonial.date}</p>
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
