import React from 'react';
import StarRating from '../ui/StarRating';

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
    text: "Finally found jewelry that doesn't turn my skin green. The gold tone is so warm and elegant. I'm obsessed.",
    name: "Aisha K.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[var(--color-surface-warm)] py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] text-[var(--color-gold)] uppercase">Kind Words</span>
          <h2 className="heading-display text-4xl md:text-5xl mt-1">From Our Community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center">
              <div className="flex justify-center mb-4">
                <StarRating rating={t.rating} />
              </div>
              <p className="text-[var(--color-text)] leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
