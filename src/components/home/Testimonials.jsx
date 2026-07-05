import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The quality is exceptional. I wear my huggies every single day and they still look brand new.",
      name: "Elena M."
    },
    {
      id: 2,
      text: "Bought the Royal Heirloom Set as a gift for my sister. She hasn't taken it off since. Beautiful packaging too.",
      name: "Sofia R."
    },
    {
      id: 3,
      text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold is so warm and elegant.",
      name: "Aisha K."
    }
  ];

  return (
    <section className="bg-velmora-cream py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Kind words</span>
          <h2 className="heading-serif text-4xl mt-2">From Our Community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-velmora-brown leading-relaxed mb-6">"{t.text}"</p>
              <p className="text-sm tracking-widest text-velmora-taupe">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;