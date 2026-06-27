import React from 'react';

const testimonials = [
  {
    id: 1,
    text: "The most beautiful everyday pieces I've ever owned. I never take them off.",
    name: "Elena M.",
    rating: 5,
  },
  {
    id: 2,
    text: "Bought the Royal Heirloom Set for my sister. She cried. Worth every penny.",
    name: "Sofia R.",
    rating: 5,
  },
  {
    id: 3,
    text: "Finally, jewelry that doesn't turn my skin green. The quality is exceptional.",
    name: "Aisha K.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="text-center mb-10">
        <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">In Their Words</span>
        <h2 className="font-serif text-4xl md:text-5xl tracking-tight mt-1">Loved by Many</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial">
            <div className="stars mb-4 text-lg">★★★★★</div>
            <p className="text-[15px] leading-relaxed mb-6 text-velmora-text">"{t.text}"</p>
            <p className="text-sm text-velmora-text-muted">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
