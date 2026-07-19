import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: 'Absolutely in love with my Vivid Aura ear cuffs. The quality is outstanding and they\'re so comfortable to wear all day.',
      date: '2 weeks ago',
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: 'I\'ve received so many compliments on my Majestic Flora necklace. It\'s the perfect statement piece without being too heavy.',
      date: '1 month ago',
    },
    {
      id: 3,
      name: 'Jessica',
      initial: 'J',
      rating: 5,
      text: 'The Golden Sphere Huggies are my new everyday go-to. They\'re the perfect size and the gold tone is so rich and beautiful.',
      date: '3 weeks ago',
    },
  ];

  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">What Our Customers Say</h2>
          <div className="w-24 h-0.5 bg-velmora-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 hover:shadow-lg transition-shadow duration-300">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-velmora-gold fill-velmora-gold" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="font-sans text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-velmora-gold text-white rounded-full flex items-center justify-center font-serif">
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-gray-600">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
