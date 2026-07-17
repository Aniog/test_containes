import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: 'Absolutely in love with my Velmora pieces. The quality is incredible for the price point, and I get compliments every time I wear them.',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: 'I\'ve been wearing my Golden Sphere Huggies every day for months now, and they still look brand new. No tarnishing at all!',
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Jessica',
      initial: 'J',
      rating: 5,
      text: 'The perfect gift for myself. Elegant, timeless, and the packaging made it feel so special. Already planning my next purchase.',
      date: '3 weeks ago'
    }
  ];

  const renderStars = (count) => {
    return Array(count).fill('★').join('');
  };

  return (
    <section className="section-padding bg-ivory">
      <div className="container-velmora">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">What Our Customers Say</h2>
          <div className="divider-hairline w-24 mx-auto mb-6" />
          <p className="text-warm-gray font-sans text-lg">
            Real reviews from real customers who love their Velmora pieces.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 md:p-10 space-y-6"
            >
              {/* Stars */}
              <div className="text-gold text-xl">
                {renderStars(testimonial.rating)}
              </div>

              {/* Text */}
              <p className="font-sans text-charcoal/80 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-sand">
                {/* Avatar Initial */}
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="font-serif text-gold text-lg">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <p className="font-sans font-medium text-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-sm text-warm-gray">
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
};

export default Testimonials;
