import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah',
    initial: 'S',
    rating: 5,
    text: "I absolutely love my Vivid Aura Jewels ear cuff. The quality is outstanding and it's so comfortable to wear all day. I've received so many compliments!",
    date: '2 weeks ago'
  },
  {
    id: 2,
    name: 'Emily',
    initial: 'E',
    rating: 5,
    text: "The Majestic Flora Nectar necklace is even more beautiful in person. The crystals catch the light beautifully. Definitely ordering again!",
    date: '1 month ago'
  },
  {
    id: 3,
    name: 'Jessica',
    initial: 'J',
    rating: 5,
    text: "As someone with sensitive skin, I appreciate that Velmora's jewelry is hypoallergenic. Finally, beautiful pieces I can wear without irritation.",
    date: '3 weeks ago'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-light tracking-wide mb-4">
          What Our Customers Say
        </h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-8 space-y-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Stars */}
            <div className="flex space-x-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-velmora-gold fill-velmora-gold"
                />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-600 leading-relaxed italic font-light">
              "{testimonial.text}"
            </p>

            {/* Customer */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-velmora-cream rounded-full flex items-center justify-center">
                <span className="font-display text-xl text-velmora-gold">
                  {testimonial.initial}
                </span>
              </div>
              <div>
                <p className="font-medium tracking-wide">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
