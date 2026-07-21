import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: 'Absolutely love my Velmora pieces. The quality is outstanding and they look far more expensive than they are.',
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: 'I get compliments every time I wear my necklace. The gold tone is perfect and hasn\'t faded at all.',
    },
    {
      id: 3,
      name: 'Jessica',
      initial: 'J',
      rating: 5,
      text: 'Bought the Royal Heirloom Set as a gift to myself. Best decision ever. The packaging was beautiful too!',
    },
  ];

  return (
    <section className="py-20 bg-velmora-beige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">What Our Customers Say</h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4 text-velmora-gold">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <p className="text-velmora-charcoal/80 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-velmora-gold/20 flex items-center justify-center text-velmora-gold font-serif">
                  {testimonial.initial}
                </div>
                <span className="font-serif text-lg">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
