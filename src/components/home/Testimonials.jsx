import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The most beautiful everyday pieces I've ever owned. I wear my huggies to sleep and they still look brand new after a year.",
      name: "Elena M.",
      rating: 5,
    },
    {
      id: 2,
      text: "Bought the Flora necklace as a gift for my sister. She hasn't taken it off since. The packaging alone felt so special.",
      name: "Sofia R.",
      rating: 5,
    },
    {
      id: 3,
      text: "Finally found jewelry that doesn't turn my skin green. The quality is exceptional for the price. Will be back for more.",
      name: "Aisha K.",
      rating: 5,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="mb-10">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-gold)] mb-2">In Their Words</p>
        <h2 className="text-4xl md:text-5xl font-serif">Loved by You</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial">
            <div className="testimonial-stars">
              {'★'.repeat(t.rating)}
            </div>
            <p className="text-[var(--color-text)] leading-relaxed mb-6">"{t.text}"</p>
            <p className="text-sm text-[var(--color-text-muted)]">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
