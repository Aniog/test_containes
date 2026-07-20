import React from 'react';
import { Star } from 'lucide-react';

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
    text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is so warm and elegant.",
    name: "Aisha K.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20 border-y border-[#E5DFD6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.15em] text-[#B8865C] mb-2">Kind Words</p>
          <h2 className="font-serif-custom text-4xl tracking-[0.05em]">From Our Community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-[#2C2522] leading-relaxed mb-6">"{testimonial.text}"</p>
              <p className="text-sm text-[#6B5F57]">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
