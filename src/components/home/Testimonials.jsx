import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: 'Absolutely beautiful quality. I wear my Velmora pieces every day and they still look brand new.',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: 'The perfect gift for myself. The packaging is gorgeous and the jewelry is even more beautiful in person.',
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Jessica',
      initial: 'J',
      rating: 5,
      text: 'Finally, affordable jewelry that doesn\'t tarnish. I\'m obsessed with my huggies!',
      date: '3 weeks ago'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-luxury">
        <h2 className="font-serif text-4xl text-center mb-4">What Our Customers Say</h2>
        <p className="text-center text-gray-600 mb-12 tracking-wide">
          Real reviews from real customers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 border border-[#C9A96E]/20 hover:border-[#C9A96E]/50 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-[#C9A96E] fill-[#C9A96E]"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9A96E] flex items-center justify-center text-white font-serif">
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
