import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'I\'ve worn my Golden Sphere Huggies every single day for three months and they still look brand new. The quality is incredible for the price.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jessica L.',
    text: 'The Royal Heirloom Set was the perfect anniversary gift. My partner was in tears. The packaging alone felt like opening a treasure chest.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily R.',
    text: 'Finally, gold jewelry that doesn\'t turn green! I have sensitive skin and these are the first pieces I can wear all day without irritation.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-warm-50">
      <div className="container-wide">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
            Love Letters
          </p>
          <h2 className="font-serif text-display-sm md:text-display text-warm-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(review => (
            <div
              key={review.id}
              className="bg-white p-8 md:p-10 relative group"
            >
              <Quote
                size={32}
                strokeWidth={1}
                className="text-gold/30 mb-5"
              />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < review.rating ? 'fill-gold text-gold' : 'text-warm-200'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              <p className="text-warm-700 text-sm leading-relaxed mb-6">
                "{review.text}"
              </p>

              <p className="font-sans text-[12px] font-semibold tracking-[0.1em] uppercase text-warm-900">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
