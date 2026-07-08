import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      initial: 'S',
      rating: 5,
      text: 'Absolutely love my Vivid Aura ear cuffs! The quality is incredible for the price point. I get compliments every time I wear them.',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Emily R.',
      initial: 'E',
      rating: 5,
      text: 'The Royal Heirloom Set was the perfect gift for my sister\'s birthday. The packaging is beautiful and the pieces are stunning.',
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Jessica L.',
      initial: 'J',
      rating: 5,
      text: 'Finally, affordable jewelry that doesn\'t tarnish! I\'ve been wearing my Golden Sphere Huggies daily for months and they still look brand new.',
      date: '3 weeks ago'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-premium">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            What Our Customers Say
          </h2>
          <div className="hairline w-16 mx-auto mb-6"></div>
          <p className="text-charcoal-light text-sm md:text-base max-w-2xl mx-auto">
            Join thousands of happy customers who have made Velmora part of their everyday luxury
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream p-8 rounded-sm hover:shadow-premium transition-shadow duration-300"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-charcoal-light text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-serif text-lg">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <p className="font-serif text-sm">{testimonial.name}</p>
                  <p className="text-xs text-charcoal-light">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
