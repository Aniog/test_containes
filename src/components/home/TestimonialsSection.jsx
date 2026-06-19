import React from 'react';
import { Star, StarHalf } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      initial: 'S',
      rating: 5,
      text: 'Absolutely love my Vivid Aura Jewels! The quality is incredible for the price point. I get compliments every time I wear them.',
      date: '2 weeks ago',
    },
    {
      id: 2,
      name: 'Emily R.',
      initial: 'E',
      rating: 5,
      text: 'The Golden Sphere Huggies are my everyday go-to. Comfortable, beautiful, and the gold plating hasnt faded at all.',
      date: '1 month ago',
    },
    {
      id: 3,
      name: 'Jessica L.',
      initial: 'J',
      rating: 5,
      text: 'Bought the Royal Heirloom Set as a gift for my sister. The packaging was gorgeous and she hasnt taken it off since!',
      date: '3 weeks ago',
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={16} fill="#C9A96E" stroke="#C9A96E" />);
    }

    if (hasHalf) {
      stars.push(<StarHalf key="half" size={16} fill="#C9A96E" stroke="#C9A96E" />);
    }

    return stars;
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4 tracking-wide">What Our Customers Say</h2>
        <div className="hairline w-24 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {renderStars(testimonial.rating)}
            </div>

            {/* Text */}
            <p className="text-velmora-charcoalLight leading-relaxed mb-6 italic">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-velmora-warm flex items-center justify-center">
                <span className="text-velmora-gold font-serif text-lg">
                  {testimonial.initial}
                </span>
              </div>
              <div>
                <p className="font-medium text-sm">{testimonial.name}</p>
                <p className="text-xs text-velmora-stone">{testimonial.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
