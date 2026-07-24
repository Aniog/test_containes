import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      initial: 'S',
      rating: 5,
      text: "I absolutely love my Vivid Aura Jewels ear cuff! The quality is outstanding and it looks so elegant. I've received countless compliments.",
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Emily R.',
      initial: 'E',
      rating: 5,
      text: "The Majestic Flora Nectar necklace is even more beautiful in person. Delicate, timeless, and the perfect gift for myself!",
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Jessica L.',
      initial: 'J',
      rating: 5,
      text: "Bought the Royal Heirloom Set for my sister's wedding, and it was perfect. The packaging alone made it feel so luxurious.",
      date: '3 weeks ago'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">What Our Customers Say</h2>
        <div className="hairline w-24 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-8 shadow-luxury hover:shadow-luxury-lg transition-shadow duration-500"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-velmora-gold text-lg">★</span>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-velmora-stone mb-6 italic leading-relaxed">
              "{testimonial.text}"
            </p>

            {/* Customer Info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                <span className="text-velmora-gold font-serif text-lg">
                  {testimonial.initial}
                </span>
              </div>
              <div>
                <p className="font-medium text-velmora-charcoal">
                  {testimonial.name}
                </p>
                <p className="text-sm text-velmora-stone">
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
