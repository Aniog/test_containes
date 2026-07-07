import React from 'react';
import { Star, User } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      initial: 'S',
      rating: 5,
      text: 'Absolutely love my Golden Sphere Huggies! The quality is incredible for the price point. I wear them every day.',
      location: 'New York, NY'
    },
    {
      id: 2,
      name: 'Emily R.',
      initial: 'E',
      rating: 5,
      text: 'The Royal Heirloom Set was the perfect gift. Beautiful packaging and even more stunning in person.',
      location: 'Los Angeles, CA'
    },
    {
      id: 3,
      name: 'Jessica L.',
      initial: 'J',
      rating: 5,
      text: 'Finally, demi-fine jewelry that doesn\'t tarnish! I\'ve had my Vivid Aura Jewels for 6 months and they still look brand new.',
      location: 'Chicago, IL'
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-4">
          Loved by Customers
        </h2>
        <div className="divider-gold w-16 mx-auto mb-6" />
        <p className="font-sans text-lg text-velmora-charcoal-light">
          Read what our community has to say
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            {/* Stars */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
              ))}
            </div>

            {/* Text */}
            <p className="font-sans text-base text-velmora-charcoal-light leading-relaxed mb-6 italic">
              "{testimonial.text}"
            </p>

            {/* Customer */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-velmora-cream flex items-center justify-center">
                <span className="font-serif text-sm font-medium text-velmora-gold">
                  {testimonial.initial}
                </span>
              </div>
              <div>
                <p className="font-sans text-sm font-medium text-velmora-charcoal">
                  {testimonial.name}
                </p>
                <p className="font-sans text-xs text-velmora-charcoal-light">
                  {testimonial.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
