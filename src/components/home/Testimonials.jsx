import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The quality is exceptional. I've worn my Golden Sphere Huggies every day for months and they still look brand new.",
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
      text: "Finally found jewelry that doesn't turn my skin green. The Majestic Flora Necklace is my new favorite.",
      name: "Aisha K.",
      rating: 5,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="mb-10">
        <p className="text-xs tracking-[0.2em] uppercase text-[#6B6560] mb-2">In Their Words</p>
        <h2 className="heading-serif text-3xl md:text-4xl">What Our Customers Say</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <div className="stars flex gap-0.5 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-[15px] leading-relaxed mb-6 text-[#2C2825]">
              "{testimonial.text}"
            </p>
            <p className="text-sm tracking-[0.05em] text-[#6B6560]">— {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
