import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: "I absolutely love my Vivid Aura Jewels ear cuff! The quality is incredible for the price, and I get compliments every time I wear it.",
      location: 'New York, NY',
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: "The Majestic Flora Nectar necklace is even more beautiful in person. Velmora has become my go-to for gifts and self-treats.",
      location: 'Los Angeles, CA',
    },
    {
      id: 3,
      name: 'Jessica',
      initial: 'J',
      rating: 5,
      text: "Finally, affordable jewelry that doesn't irritate my sensitive skin! The hypoallergenic promise is real. Will definitely be ordering again.",
      location: 'Chicago, IL',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-velmora-charcoal mb-4">
            Loved by Our Community
          </h2>
          <div className="divider mb-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-velmora-cream p-8 md:p-10 space-y-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-velmora-gold text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="font-sans text-base leading-relaxed text-velmora-charcoal-light italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-velmora-sand">
                {/* Avatar with Initial */}
                <div className="w-12 h-12 bg-velmora-gold rounded-full flex items-center 
                                justify-center text-white font-serif text-lg">
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-sans font-semibold text-velmora-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-sm text-velmora-charcoal-light">
                    {testimonial.location}
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
