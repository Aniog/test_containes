import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      initial: 'S',
      rating: 5,
      text: 'Absolutely love my Vivid Aura earrings! The quality is incredible for the price point. I get compliments every time I wear them.',
    },
    {
      id: 2,
      name: 'Emily R.',
      initial: 'E',
      rating: 5,
      text: 'The Royal Heirloom Set was the perfect gift. Beautiful packaging and even more stunning in person. Will definitely be purchasing again!',
    },
    {
      id: 3,
      name: 'Jessica L.',
      initial: 'J',
      rating: 5,
      text: 'Finally found jewelry that doesn\'t irritate my sensitive ears! The hypoallergenic claim is real. Velmora has a customer for life.',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-premium">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl mb-4">What Our Customers Say</h2>
          <div className="hairline w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#C9A96E] text-lg">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-[#6B6B6B] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Customer */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#F5F0EB] flex items-center justify-center">
                  <span className="font-serif text-[#C9A96E]">{testimonial.initial}</span>
                </div>
                <span className="font-medium text-sm">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
