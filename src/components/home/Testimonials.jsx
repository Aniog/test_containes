import React from 'react';

const testimonials = [
  {
    id: 1,
    text: "The quality is incredible for the price. I wear my huggies every single day and they still look brand new.",
    name: "Elena M.",
    rating: 5,
  },
  {
    id: 2,
    text: "Bought the Flora necklace as a gift for my sister. She hasn't taken it off since. Will be ordering more.",
    name: "Priya S.",
    rating: 5,
  },
  {
    id: 3,
    text: "Finally found jewelry that doesn't turn my skin green. The gold tone is so warm and beautiful.",
    name: "Aisha K.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="mb-10">
        <p className="text-xs tracking-[0.12em] uppercase text-[#6B6359]">Kind Words</p>
        <h2 className="serif text-4xl md:text-5xl tracking-[0.02em] mt-1">From Our Community</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial">
            <div className="stars mb-4">
              {'★'.repeat(t.rating)}
            </div>
            <p className="text-[#3A3632] leading-relaxed mb-6">"{t.text}"</p>
            <p className="text-sm text-[#6B6359]">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
