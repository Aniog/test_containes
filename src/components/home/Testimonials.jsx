import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: "The quality of my Velmora pieces exceeded all expectations. I wear my huggies every day and they still look brand new.",
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: "Bought the Royal Heirloom Set as a gift to myself. The packaging was so beautiful, it felt like receiving a present from someone who truly knows you.",
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Aisha',
      initial: 'A',
      rating: 5,
      text: "Finally, jewelry that doesn't irritate my sensitive ears! The hypoallergenic promise is real. Plus, they're gorgeous.",
      date: '3 weeks ago'
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4 tracking-wide">
          What Our Customers Say
        </h2>
        <div className="hairline w-24 mx-auto mb-6" />
        <p className="text-velmora-text-light max-w-2xl mx-auto">
          Real reviews from women who have made Velmora part of their everyday luxury.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-8 border border-velmora-border hover:shadow-premium transition-shadow duration-300"
          >
            {/* Stars */}
            <div className="star-rating mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-velmora-gold">★</span>
              ))}
            </div>

            {/* Text */}
            <p className="text-velmora-text-light leading-relaxed mb-6 italic">
              "{testimonial.text}"
            </p>

            {/* Customer */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-velmora-warm-gray flex items-center justify-center">
                <span className="font-serif text-velmora-gold text-lg">
                  {testimonial.initial}
                </span>
              </div>
              <div>
                <p className="font-serif text-sm tracking-wider uppercase">
                  {testimonial.name}
                </p>
                <p className="text-xs text-velmora-text-light">
                  {testimonial.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
