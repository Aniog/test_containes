import React from 'react';
import StarRating from '../ui/StarRating';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new.",
      name: "Amelia R.",
      rating: 5,
    },
    {
      id: 2,
      text: "Bought the Flora necklace as a gift for my sister. She hasn't taken it off since. Beautiful packaging too.",
      name: "Charlotte M.",
      rating: 5,
    },
    {
      id: 3,
      text: "Finally found jewelry that doesn't irritate my skin. The gold tone is so warm and elegant. Love everything about Velmora.",
      name: "Isabella K.",
      rating: 5,
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.2em] text-[#B89778] mb-2">LOVED BY MANY</p>
        <h2 className="serif text-4xl tracking-wide">What Our Customers Say</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="border border-[#D4CFC6] p-8">
            <StarRating rating={t.rating} />
            <p className="mt-6 text-[#2C2825] leading-relaxed text-[15px]">
              "{t.text}"
            </p>
            <p className="mt-6 text-sm tracking-wide text-[#6B645C]">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
