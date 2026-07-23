import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new.",
      name: "Elena M.",
      rating: 5,
    },
    {
      id: 2,
      text: "Bought the Royal Heirloom Set as a gift for my sister. She hasn't taken it off since. Beautiful packaging too.",
      name: "Sofia R.",
      rating: 5,
    },
    {
      id: 3,
      text: "Finally found jewelry that doesn't irritate my skin. The gold tone is warm and rich. Will be back for more.",
      name: "Aisha K.",
      rating: 5,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-[#F8F5F1]">
      <div className="text-center mb-12">
        <p className="uppercase tracking-[0.15em] text-xs text-[#6B645C] mb-2">In Their Words</p>
        <h2 className="font-serif text-4xl tracking-[0.05em]">What Our Customers Say</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="text-center">
            <div className="stars mb-4 text-lg">★★★★★</div>
            <p className="text-[#6B645C] italic leading-relaxed mb-6">"{t.text}"</p>
            <p className="text-sm tracking-[0.05em]">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;