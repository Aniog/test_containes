import React from 'react';
import StarRating from '../ui/StarRating';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The quality is incredible for the price. I've worn my huggies every day for six months and they still look brand new.",
      author: "Elena M.",
      rating: 5,
    },
    {
      id: 2,
      text: "Bought the Royal Heirloom Set as a gift for my sister. She cried. I cried. Worth every penny.",
      author: "Sofia R.",
      rating: 5,
    },
    {
      id: 3,
      text: "Finally found jewelry that doesn't turn my skin green. The gold tone is so warm and beautiful in person.",
      author: "Aisha K.",
      rating: 5,
    },
  ];

  return (
    <section className="section bg-[#F8F5F1]">
      <div className="container">
        <div className="mb-8 text-center">
          <span className="text-xs tracking-[0.12em] uppercase text-[#B89778]">Kind Words</span>
          <h2 className="font-serif text-3xl mt-1">From Our Community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial">
              <StarRating rating={t.rating} />
              <p className="testimonial-text">"{t.text}"</p>
              <p className="testimonial-author">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;