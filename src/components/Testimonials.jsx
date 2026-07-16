import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The quality is incredible for the price. I've worn my huggies every day for six months and they still look brand new.",
      name: "Elena M.",
      rating: 5,
    },
    {
      id: 2,
      text: "Bought the Royal Heirloom Set as a gift for my sister. She cried when she opened it. Worth every penny.",
      name: "Sofia R.",
      rating: 5,
    },
    {
      id: 3,
      text: "Finally found jewelry that doesn't turn my skin green. The gold tone is so warm and beautiful in person.",
      name: "Aisha K.",
      rating: 5,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((t) => (
        <div key={t.id} className="testimonial">
          <div className="stars mb-4 flex gap-0.5">
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <p className="body-text text-sm mb-6 leading-relaxed">"{t.text}"</p>
          <p className="text-sm font-medium">— {t.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
