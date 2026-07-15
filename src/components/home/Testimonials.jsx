import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The quality is incredible for the price. I wear my Golden Sphere Huggies every single day and they still look brand new.",
      name: "Elena M.",
      rating: 5,
    },
    {
      id: 2,
      text: "Bought the Royal Heirloom Set as a gift for my sister. She cried when she opened it. Worth every penny.",
      name: "Sofia R.",
      rating: 5,
    },
    {
      id: 3,
      text: "I was hesitant about ordering jewelry online, but Velmora exceeded every expectation. The packaging alone feels so special.",
      name: "Aisha K.",
      rating: 5,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.15em] text-muted uppercase mb-2">Kind Words</p>
        <h2 className="font-serif text-3xl md:text-4xl">From Our Community</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <div className="stars mb-4">★★★★★</div>
            <p className="body-text text-[var(--velmora-text-muted)] mb-6">
              "{testimonial.text}"
            </p>
            <p className="text-sm font-medium">— {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
