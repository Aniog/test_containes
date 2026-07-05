import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely love my Vivid Aura earrings! The quality is incredible for the price point. I wear them every day.',
    initial: 'S'
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'The Royal Heirloom Set was the perfect gift. Beautiful packaging and even more stunning in person.',
    initial: 'E'
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally, gold-plated jewelry that doesn't irritate my sensitive skin. Velmora has become my go-to brand.',
    initial: 'J'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-velmora-warm-white">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">What Our Customers Say</h2>
          <div className="w-16 h-0.5 bg-velmora-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="text-center space-y-6">
              {/* Stars */}
              <div className="flex justify-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-velmora-gold text-xl">★</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg leading-relaxed italic font-light">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="text-velmora-gold font-medium">{testimonial.initial}</span>
                </div>
                <span className="uppercase tracking-wider text-sm">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
