import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      initial: 'S',
      rating: 5,
      text: 'Absolutely love my Vivid Aura ear cuff! The quality is incredible for the price point. I get compliments every time I wear it.',
    },
    {
      id: 2,
      name: 'Emily R.',
      initial: 'E',
      rating: 5,
      text: 'The Majestic Flora necklace is even more beautiful in person. Delicate, feminine, and the perfect length. Already ordered the matching earrings!',
    },
    {
      id: 3,
      name: 'Jessica L.',
      initial: 'J',
      rating: 5,
      text: 'Finally, huggie hoops that don\'t irritate my sensitive ears! The Golden Sphere Huggies are now my everyday go-to. Will definitely be ordering more.',
    },
  ];

  return (
    <section className="py-20 bg-velmora-cream px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light font-['Cormorant_Garamond'] mb-2">
            What Our Customers Say
          </h2>
          <div className="w-12 h-[1px] bg-velmora-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 space-y-4"
            >
              {/* Stars */}
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-velmora-gold fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-velmora-text-light italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer */}
              <div className="flex items-center space-x-3 pt-4 border-t border-velmora-border">
                <div className="w-10 h-10 rounded-full bg-velmora-warm-white flex items-center justify-center">
                  <span className="text-sm text-velmora-gold font-medium">
                    {testimonial.initial}
                  </span>
                </div>
                <span className="text-sm font-medium text-velmora-text">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
