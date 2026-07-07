import React from 'react';
import StarRating from '../ui/StarRating';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The quality is incredible for the price. I've worn my huggies every day for six months and they still look brand new.",
      name: "Elena M."
    },
    {
      id: 2,
      text: "Bought the Royal Heirloom Set as a gift for my mom. She cried. Best purchase I've made this year.",
      name: "Sofia R."
    },
    {
      id: 3,
      text: "I get compliments every time I wear the Flora Nectar necklace. It's become my signature piece.",
      name: "Aisha K."
    }
  ];

  return (
    <section className="bg-velmora-surface py-16 md:py-20 border-y border-velmora-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <div className="uppercase tracking-[0.12em] text-xs text-velmora-text-light mb-1">Voices We Treasure</div>
          <h2 className="font-serif text-4xl tracking-[-0.01em]">From Our Community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial">
              <StarRating rating={5} size={15} />
              <p className="mt-5 text-[15px] leading-relaxed text-velmora-text">
                "{t.text}"
              </p>
              <div className="mt-5 text-sm text-velmora-text-muted">— {t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
