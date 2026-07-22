import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "The quality is incredible for the price. I've worn my huggies every day for six months and they still look brand new.",
    author: "Elena M.",
    rating: 5,
  },
  {
    id: 2,
    text: "Bought the Royal Heirloom Set as a gift for my sister. She cried when she opened it. Worth every penny.",
    author: "Sofia R.",
    rating: 5,
  },
  {
    id: 3,
    text: "I love that I can wear these to work and then out to dinner without changing. They go with everything.",
    author: "Aisha K.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section bg-[var(--velmora-bg)]">
      <div className="container">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-gold-dark)]">Kind Words</span>
          <h2 className="heading-serif text-4xl mt-1">From Our Community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial">
              <div className="testimonial-stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 inline fill-current" />
                ))}
              </div>
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
