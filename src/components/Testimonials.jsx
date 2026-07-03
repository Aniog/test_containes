import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      initial: 'S',
      rating: 5,
      text: 'Absolutely love my Velmora pieces. The quality is outstanding and they look far more expensive than they are.',
      location: 'New York, NY'
    },
    {
      id: 2,
      name: 'Emily R.',
      initial: 'E',
      rating: 5,
      text: 'I get compliments every time I wear my necklace. The gold plating hasnt faded at all, even after months of daily wear.',
      location: 'Los Angeles, CA'
    },
    {
      id: 3,
      name: 'Jessica L.',
      initial: 'J',
      rating: 5,
      text: 'Purchased the Royal Heirloom Set as a gift for myself and it was the best decision. Elegant, timeless, perfect.',
      location: 'Chicago, IL'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-luxury">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">
          Loved by Our Community
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="text-center p-8 bg-[#faf9f6]"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-[#c9a96e] text-[#c9a96e]"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="font-light text-[#2d2d2d] mb-8 italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#c9a96e] text-white flex items-center justify-center font-serif text-lg">
                  {testimonial.initial}
                </div>
                <div className="text-left">
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-[#8a8a8a]">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
