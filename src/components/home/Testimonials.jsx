import React from 'react';
import { Star } from 'lucide-react';

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
      text: "Bought the Royal Heirloom Set for my sister. She cried when she opened it. Worth every penny.",
      name: "Sofia R.",
      rating: 5,
    },
    {
      id: 3,
      text: "Finally, jewelry that doesn't turn my skin green. The gold tone is so warm and beautiful.",
      name: "Aisha K.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-[#F8F5F1] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[3px] text-[#B89778] mb-2">LOVED BY MANY</p>
          <h2 className="font-serif text-4xl tracking-[1px] text-[#2C2825]">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 border border-[#E8E4DE]">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[#B89778] text-[#B89778]" />
                ))}
              </div>
              <p className="text-[#6B665F] text-[15px] leading-relaxed mb-6">"{t.text}"</p>
              <p className="text-sm tracking-[1px] text-[#2C2825]">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
