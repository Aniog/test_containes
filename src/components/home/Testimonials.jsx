import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "The quality is incredible for the price. I wear my Golden Sphere Huggies every single day.",
      name: "Elena M.",
    },
    {
      text: "Bought the Royal Heirloom Set as a gift for my sister. She hasn't taken it off since. Beautiful packaging too.",
      name: "Sofia R.",
    },
    {
      text: "Finally found jewelry that doesn't turn my skin green. The Majestic Flora necklace is my new favorite.",
      name: "Aisha K.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.15em] text-[#B89778] mb-2">LOVED BY MANY</p>
        <h2 className="font-serif text-4xl tracking-wide">What Our Customers Say</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card pl-6">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="star text-lg">★</span>
              ))}
            </div>
            <p className="text-[#5C4E42] leading-relaxed mb-4">"{t.text}"</p>
            <p className="text-sm tracking-wider">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
