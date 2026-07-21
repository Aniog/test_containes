import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: "I've been wearing my Golden Sphere Huggies every day for 6 months now. The quality is incredible — no tarnishing at all!",
      date: '2 weeks ago',
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: "Bought the Royal Heirloom Set as a gift to myself for a promotion. The packaging alone made me feel special. The jewelry is even more beautiful in person.",
      date: '1 month ago',
    },
    {
      id: 3,
      name: 'Jessica',
      initial: 'J',
      rating: 5,
      text: "Finally, jewelry that doesn't irritate my sensitive ears! Velmora's hypoallergenic promise is real. I'm now a customer for life.",
      date: '3 weeks ago',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-velmora-light-gray">
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="font-serif text-3xl md:text-4xl mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Loved by Our Customers
          </h2>
          <div className="hairline w-24 mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-cream p-8 md:p-10 relative"
            >
              {/* Quote Icon */}
              <Quote
                size={40}
                className="text-velmora-gold/20 mb-6"
                strokeWidth={1}
              />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-velmora-gold fill-velmora-gold"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-velmora-text-light mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                {/* Avatar with Initial */}
                <div className="w-10 h-10 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="text-velmora-gold font-serif text-lg">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <p className="font-serif text-sm">{testimonial.name}</p>
                  <p className="text-xs text-velmora-warm-gray">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Reviews Link */}
        <div className="text-center mt-12">
          <a
            href="#reviews"
            className="text-sm uppercase tracking-wide text-velmora-gold hover:text-velmora-gold-dark transition-colors"
          >
            Read All Reviews →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
