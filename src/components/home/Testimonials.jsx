import React from 'react';

const testimonials = [
  {
    id: 1,
    text: "The quality is incredible for the price. I wear my huggies every single day and they still look brand new.",
    name: "Elena M."
  },
  {
    id: 2,
    text: "Bought the Royal Heirloom set as a gift for my sister. She hasn't taken it off since. Beautiful packaging too.",
    name: "Sofia R."
  },
  {
    id: 3,
    text: "Finally found jewelry that doesn't turn my skin green. The gold tone is so warm and elegant. Obsessed.",
    name: "Aisha K."
  }
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20 border-y border-[#E8E4DE]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] text-[#C5A46E] mb-2">LOVED BY MANY</p>
          <h2 className="font-serif-custom text-4xl tracking-[0.02em]">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card p-8">
              <div className="stars mb-4 text-lg">★★★★★</div>
              <p className="text-[#1A1816] leading-relaxed mb-6">"{t.text}"</p>
              <p className="text-sm text-[#6B665F]">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
