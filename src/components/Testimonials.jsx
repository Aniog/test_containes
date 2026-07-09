import React from 'react';

const testimonials = [
  {
    id: 1,
    text: "The most beautiful pieces I've ever owned. The quality is exceptional and they feel so special every time I wear them.",
    name: "Elena M.",
    rating: 5,
  },
  {
    id: 2,
    text: "Bought the Heirloom Set as a gift for my sister. She hasn't taken it off since. The packaging alone made it feel so luxurious.",
    name: "Sofia R.",
    rating: 5,
  },
  {
    id: 3,
    text: "I wear my Sphere Huggies every single day. They go with everything and still look brand new after months of wear.",
    name: "Aisha K.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((t) => (
        <div key={t.id} className="space-y-4">
          <div className="stars text-lg">★★★★★</div>
          <p className="text-[#6B635C] italic leading-relaxed">"{t.text}"</p>
          <p className="text-sm tracking-[0.05em] text-[#1C1917]">— {t.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;