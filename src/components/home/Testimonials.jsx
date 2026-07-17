import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: 'Absolutely love my Vivid Aura ear cuff! The quality is incredible for the price point. I get compliments every time I wear it.',
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: 'The Majestic Flora necklace is even more beautiful in person. Delicate, elegant, and the perfect length. Will definitely be ordering more.',
    },
    {
      id: 3,
      name: 'Jessica',
      initial: 'J',
      rating: 5,
      text: 'Finally found huggies that don\'t irritate my sensitive ears! The Golden Sphere Huggies are now my everyday go-to. Thank you, Velmora!',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="font-serif text-4xl lg:text-5xl text-velmora-charcoal mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Loved by Our Community
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-ivory p-8 lg:p-10 space-y-6"
            >
              {/* Stars */}
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-velmora-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-velmora-graphite leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="text-velmora-gold font-medium">
                    {testimonial.initial}
                  </span>
                </div>
                <span className="text-sm text-velmora-charcoal font-medium">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
