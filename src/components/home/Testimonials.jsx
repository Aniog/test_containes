import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: 'The quality of my necklace exceeded all expectations. It has become my everyday signature piece.',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: 'Bought the huggies as a gift for myself and I haven\'t taken them off since. Truly demi-fine perfection.',
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Maria',
      initial: 'M',
      rating: 5,
      text: 'Elegant, timeless, and the perfect price point. Velmora has become my go-to for jewelry gifts.',
      date: '3 weeks ago'
    },
  ];

  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
            Loved by Our Community
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-velmora-gold fill-velmora-gold"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="font-sans text-base text-velmora-charcoal/80 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-velmora-gold/20 rounded-full flex items-center justify-center">
                  <span className="font-serif text-lg text-velmora-gold">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-velmora-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-xs text-velmora-muted">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
