import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    initial: 'S',
    text: 'The Golden Sphere Huggies are my everyday go-to. So lightweight and the gold tone is perfect — not too yellow, not too pale.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily R.',
    initial: 'E',
    text: 'Bought the Royal Heirloom Set for my best friend and she cried. The packaging alone felt like a luxury experience.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jessica K.',
    initial: 'J',
    text: 'Finally found jewelry that doesn\'t irritate my sensitive ears. The Amber Lace Earrings are absolutely stunning in person.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-paper p-6 sm:p-8 border border-border hover:border-gold/30 transition-colors duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-ink leading-relaxed mb-6 italic font-light">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-cream flex items-center justify-center">
                  <span className="font-serif text-sm text-gold">{t.initial}</span>
                </div>
                <span className="text-[11px] font-sans font-medium tracking-[0.1em] uppercase text-warm-gray">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
