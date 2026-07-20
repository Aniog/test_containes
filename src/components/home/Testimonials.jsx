import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The quality is incredible for the price. I wear my huggies every day and they still look brand new.",
      name: "Elena M.",
      rating: 5,
    },
    {
      id: 2,
      text: "Bought the Flora necklace as a gift for my sister. She hasn't taken it off since. Will be back for more.",
      name: "Sofia R.",
      rating: 5,
    },
    {
      id: 3,
      text: "I was nervous about ordering jewelry online, but Velmora exceeded every expectation. Beautiful packaging too.",
      name: "Aisha K.",
      rating: 5,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="mb-10">
        <p className="uppercase tracking-[0.15em] text-xs text-velmora-gold-dark mb-2">In Their Words</p>
        <h2 className="heading-serif text-4xl md:text-5xl">What Our Customers Say</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial">
            <div className="stars mb-4 text-lg">★★★★★</div>
            <p className="text-velmora-text leading-relaxed mb-6">"{t.text}"</p>
            <p className="text-sm tracking-[0.05em] text-velmora-muted">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
