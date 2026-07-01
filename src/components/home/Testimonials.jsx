import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      text: "The quality is exceptional. I wear my huggies every single day and they still look brand new.",
      name: "Elena M.",
    },
    {
      text: "Bought the Flora necklace as a gift for my sister. She hasn't taken it off since. Beautiful packaging too.",
      name: "Sofia R.",
    },
    {
      text: "Finally found jewelry that doesn't irritate my skin. The gold tone is so warm and elegant.",
      name: "Aisha K.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="text-center mb-12">
        <div className="text-xs tracking-[0.12em] uppercase text-vel-muted mb-2">Kind Words</div>
        <h2 className="text-3xl md:text-4xl">From Our Community</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="testimonial">
            <div className="stars mb-4">★★★★★</div>
            <p className="text-[15px] leading-relaxed mb-6">"{review.text}"</p>
            <div className="text-sm text-vel-muted">— {review.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
