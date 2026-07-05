import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: "I've worn the Golden Sphere Huggies every single day for three months. They still look brand new. Obsessed.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Jessica L.',
    text: "Bought the Royal Heirloom Set as a gift for my sister. The packaging alone is stunning — and she absolutely loved it.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya K.',
    text: "Finally, jewelry that doesn't turn my skin green. The quality is incredible for the price. Already eyeing my next piece.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
      <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-4xl text-[#2C2622] mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          What Our Customers Say
        </h2>
        <div className="w-12 h-px bg-[#C9A84C] mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-xl p-8 shadow-sm border border-[#E8DFD5]/50 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={14} className="fill-[#C9A84C] text-[#C9A84C]" />
              ))}
            </div>
            <p
              className="text-[#2C2622] text-base leading-relaxed mb-6 italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              "{t.text}"
            </p>
            <p className="text-xs tracking-[0.15em] uppercase text-[#8A7F74] font-semibold">
              — {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
