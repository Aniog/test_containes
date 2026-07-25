import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: 'Absolutely love my Vivid Aura ear cuffs! The quality is outstanding and they look so elegant. I get compliments every time I wear them.',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: 'The Majestic Flora necklace is even more beautiful in person. The crystals catch the light perfectly. Worth every penny!',
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Jessica',
      initial: 'J',
      rating: 5,
      text: 'Finally found huggies that don\'t irritate my sensitive ears! The Golden Sphere Huggies are comfortable and stylish.',
      date: '3 weeks ago'
    }
  ];

  return (
    <section className="section-padding bg-velmora-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
            What Our Customers Say
          </h2>
          <div className="hairline w-24 mx-auto mb-4" />
          <p className="text-velmora-warmGray text-sm uppercase tracking-widest">
            Real reviews from real customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-premium hover:shadow-premium-lg transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-velmora-gold text-lg">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-velmora-charcoal leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Customer */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-velmora-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-velmora-gold font-serif text-lg">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-velmora-warmGray">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
