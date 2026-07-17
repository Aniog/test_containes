import React from 'react';
import StarRating from '../ui/StarRating';

const Testimonials = () => {
  const testimonials = [
    {
      text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new.",
      author: "Elena M.",
      rating: 5,
    },
    {
      text: "Bought the Royal Heirloom Set as a gift for my sister. She hasn't taken it off since. Beautiful packaging too.",
      author: "Sofia R.",
      rating: 5,
    },
    {
      text: "Finally found jewelry that doesn't irritate my skin. The gold is warm and rich. Will be back for more.",
      author: "Aisha K.",
      rating: 5,
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
      <div className="text-center mb-12">
        <span className="text-xs tracking-[0.2em] text-[var(--color-gold)]">LOVED BY MANY</span>
        <h2 className="font-serif text-3xl md:text-4xl mt-2">What Our Customers Say</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-10">
        {testimonials.map((t, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-4">
              <StarRating rating={t.rating} size={16} />
            </div>
            <p className="testimonial text-[var(--color-text)] mb-6">"{t.text}"</p>
            <p className="testimonial-author">{t.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
