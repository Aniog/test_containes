import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: 'Absolutely in love with my Golden Sphere Huggies. They\'re my everyday go-to now. The quality is incredible for the price.',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: 'I bought the Royal Heirloom Set as a gift to myself, and I couldn\'t be happier. The packaging alone made it feel so special.',
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Maria',
      initial: 'M',
      rating: 5,
      text: 'Finally, jewelry that doesn\'t irritate my sensitive skin! The hypoallergenic claim is real. Will definitely be ordering again.',
      date: '3 weeks ago'
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container-premium">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">What Our Customers Say</h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 shadow-premium hover:shadow-premium-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-velmora-gold fill-velmora-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-velmora-warm-gray mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-velmora-sand flex items-center justify-center">
                  <span className="font-serif text-velmora-charcoal text-sm">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <p className="font-serif text-sm">{testimonial.name}</p>
                  <p className="text-xs text-velmora-warm-gray">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
