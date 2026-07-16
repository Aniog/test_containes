import React from "react";

const testimonials = [
  {
    id: 1,
    text: "The quality is incredible for the price. I've worn my huggies every day for six months and they still look brand new.",
    name: "Lara S."
  },
  {
    id: 2,
    text: "Bought the Royal Heirloom Set as a gift for my sister. She cried. I cried. Best purchase I've made all year.",
    name: "Priya M."
  },
  {
    id: 3,
    text: "Finally found earrings that don't irritate my sensitive ears. The gold tone is so warm and rich. I'm obsessed.",
    name: "Camille D."
  }
];

const Testimonials = () => {
  return (
    <section className="bg-[#F5F2ED] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[3px] text-[#B89778]">LOVED BY</span>
          <h2 className="font-serif text-4xl tracking-[1px] mt-1">Our Community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#B89778] text-lg">★</span>
                ))}
              </div>
              <p className="text-[#6B6259] leading-relaxed mb-6 text-[15px]">
                "{t.text}"
              </p>
              <p className="text-sm tracking-[1px] text-[#2C2522]">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
