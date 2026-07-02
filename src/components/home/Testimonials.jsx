import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new.",
      name: "Elena M.",
    },
    {
      text: "Bought the Royal Heirloom Set as a gift for my sister. She hasn't taken it off since. Beautiful packaging too.",
      name: "Sofia R.",
    },
    {
      text: "Finally found jewelry that doesn't irritate my sensitive skin. The ear cuffs are my everyday go-to.",
      name: "Aisha K.",
    },
  ];

  return (
    <section className="section bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] text-text-muted mb-2">LOVED BY MANY</p>
          <h2 className="serif text-4xl tracking-tight">What our customers say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, index) => (
            <div key={index} className="text-center">
              <div className="stars mb-4 flex justify-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-[15px] leading-relaxed mb-6 text-text-muted">"{t.text}"</p>
              <p className="text-sm tracking-wide">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;