import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The quality is incredible for the price. I've worn my huggies every day for six months and they still look brand new.",
      author: "Elena M."
    },
    {
      id: 2,
      text: "Bought the Royal Heirloom Set as a gift for my sister. She cried when she opened it. Will be back for more.",
      author: "Sofia R."
    },
    {
      id: 3,
      text: "Finally found jewelry that doesn't turn my skin green. The gold tone is so warm and beautiful. Obsessed.",
      author: "Aisha K."
    }
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-2">Kind Words</p>
          <h2 className="section-title">From Our Community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial">
              <div className="testimonial-stars">★★★★★</div>
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
