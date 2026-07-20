import React from 'react';
import StarRating from '../ui/StarRating';

const testimonials = [
  {
    id: 1,
    text: "The most beautiful everyday pieces I've ever owned. I wear my huggies every single day.",
    name: "Elena M.",
    rating: 5,
  },
  {
    id: 2,
    text: "Bought the Royal Heirloom Set as a gift for my sister. She hasn't taken it off since.",
    name: "Sofia R.",
    rating: 5,
  },
  {
    id: 3,
    text: "The quality is exceptional for the price. These feel like pieces I will keep forever.",
    name: "Aisha K.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="uppercase tracking-[0.2em] text-xs text-[var(--velmora-gold)]">In their words</span>
          <h2 className="font-serif text-4xl mt-2">Loved by our community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial">
              <StarRating rating={t.rating} />
              <p className="mt-6 text-[var(--velmora-charcoal)] body-text">"{t.text}"</p>
              <p className="mt-6 text-sm tracking-widest text-[var(--velmora-taupe)]">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
