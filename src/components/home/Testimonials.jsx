import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      initial: 'S',
      rating: 5,
      text: 'Absolutely love my Golden Sphere Huggies! The quality is incredible for the price. I wear them every day.',
    },
    {
      id: 2,
      name: 'Emily R.',
      initial: 'E',
      rating: 5,
      text: 'The Majestic Flora Nectar necklace is even more beautiful in person. Already ordered the matching earrings!',
    },
    {
      id: 3,
      name: 'Jessica L.',
      initial: 'J',
      rating: 5,
      text: 'Perfect gift! The Royal Heirloom Set came beautifully packaged. My sister hasn\'t taken it off since.',
    },
  ];

  return (
    <section className="py-20 bg-velmora-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl mb-4">What Our Customers Say</h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-velmora-charcoal mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="text-velmora-gold font-serif text-lg">
                    {testimonial.initial}
                  </span>
                </div>
                <span className="font-serif text-sm">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
