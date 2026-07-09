import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      text: "The quality is incredible for the price. I've worn my huggies every day for six months and they still look brand new.",
      name: "Elena M.",
      rating: 5,
    },
    {
      text: "Bought the Royal Heirloom Set as a gift for my sister. She cried when she opened it. Worth every penny.",
      name: "Sofia R.",
      rating: 5,
    },
    {
      text: "Finally found jewelry that doesn't turn my skin green. The gold tone is so warm and beautiful in person.",
      name: "Aisha K.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] text-[#B8976A]">LOVED BY MANY</span>
          <h2 className="heading-lg mt-2">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial">
              <div className="flex gap-0.5 mb-4 text-[#B8976A]">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-[#2C2824] leading-relaxed mb-4">"{review.text}"</p>
              <p className="text-sm text-[#6B645E]">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;