import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "The most beautiful everyday pieces I've ever owned. I wear my huggies to sleep and they still look brand new.",
      author: "Elena M.",
      rating: 5,
    },
    {
      text: "Bought the Royal Heirloom Set as a gift for my sister. She cried. Worth every penny.",
      author: "Sofia R.",
      rating: 5,
    },
    {
      text: "Finally, jewelry that doesn't turn my skin green. The quality is exceptional for the price.",
      author: "Aisha K.",
      rating: 5,
    },
  ];

  return (
    <section className="section bg-velmora-bg-alt">
      <div className="container">
        <div className="text-center mb-10">
          <div className="uppercase tracking-[0.2em] text-xs text-velmora-gold-dark mb-1">In Their Words</div>
          <h2>Our Community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"{t.text}"</p>
              <p className="testimonial-author">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;