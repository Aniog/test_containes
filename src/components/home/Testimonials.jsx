import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The quality is incredible. I've worn my huggies every day for six months and they still look brand new.",
      name: "Elena M.",
      rating: 5,
    },
    {
      id: 2,
      text: "Bought the Royal Heirloom Set as a gift for my sister. She cried. Best purchase I've made this year.",
      name: "Sofia R.",
      rating: 5,
    },
    {
      id: 3,
      text: "Finally found jewelry that doesn't turn my skin green. The gold tone is so warm and beautiful.",
      name: "Aisha K.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-xs tracking-[0.2em] text-[#6B6058] uppercase mb-2">In Their Words</p>
          <h2 className="serif text-3xl md:text-4xl tracking-[-0.01em]">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-[#2C2522] leading-relaxed mb-6">"{t.text}"</p>
              <p className="text-sm text-[#6B6058]">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
