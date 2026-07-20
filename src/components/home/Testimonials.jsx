import React from 'react';
import StarRating from '../ui/StarRating';

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'The quality is incredible for the price. I wear my Velmora earrings every single day and they still look brand new after months.',
    rating: 5,
  },
  {
    name: 'Jessica L.',
    text: 'I bought the Royal Heirloom Set as a gift for my sister. The packaging was beautiful and she absolutely loved it. Will definitely order again.',
    rating: 5,
  },
  {
    name: 'Rachel K.',
    text: 'Finally, jewelry that looks expensive but doesn\'t break the bank. The gold tone is so rich and warm. I\'ve gotten so many compliments.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-light)] mb-3">What They Say</p>
          <h2 className="serif-heading text-3xl md:text-4xl tracking-wide">Loved by Thousands</h2>
          <div className="w-12 h-px bg-[var(--velmora-gold)] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[var(--velmora-surface)] p-8 rounded-sm border border-[var(--velmora-border-light)] hover:shadow-lg transition-shadow duration-300"
            >
              <StarRating rating={t.rating} size={16} className="mb-4" />
              <p className="text-sm text-[var(--velmora-text-muted)] leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <p className="text-sm font-medium text-[var(--velmora-text)]">
                {t.name}
              </p>
              <p className="text-xs text-[var(--velmora-text-light)]">Verified Buyer</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
