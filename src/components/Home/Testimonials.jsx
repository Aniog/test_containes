import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: 'Absolutely love my Vivid Aura ear cuffs! The quality is incredible for the price. I get compliments every time I wear them.',
      date: '2 weeks ago',
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: 'The Royal Heirloom Set was the perfect gift for my sister\'s birthday. The packaging is so luxe, and the pieces are even more beautiful in person.',
      date: '1 month ago',
    },
    {
      id: 3,
      name: 'Jessica',
      initial: 'J',
      rating: 5,
      text: 'Finally, jewelry that doesn\'t irritate my sensitive ears! The hypoallergenic claim is real. Will definitely be ordering more.',
      date: '3 weeks ago',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">What Our Customers Say</h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-velmora-cream p-8 border border-velmora-warm hover:border-velmora-gold transition-colors duration-300"
          >
            {/* Stars */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-velmora-gold fill-velmora-gold"
                />
              ))}
            </div>

            {/* Text */}
            <p className="text-velmora-graphite leading-relaxed mb-6 italic">
              "{testimonial.text}"
            </p>

            {/* Customer */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                <span className="font-serif text-velmora-gold text-lg">
                  {testimonial.initial}
                </span>
              </div>
              <div>
                <p className="font-medium text-sm">{testimonial.name}</p>
                <p className="text-xs text-velmora-mist">{testimonial.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
