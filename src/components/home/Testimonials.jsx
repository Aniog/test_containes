import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new.",
      name: "Amelia R."
    },
    {
      text: "Bought the Flora Nectar for my sister's birthday. She hasn't taken it off since. Beautiful packaging too.",
      name: "Lila K."
    },
    {
      text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold is so warm and rich. Love it.",
      name: "Sofia M."
    }
  ];

  return (
    <section className="bg-[#F5F2ED] py-16 md:py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[3px] text-[#C5A46E]">LOVED BY MANY</span>
          <h2 className="font-serif text-3xl md:text-4xl tracking-[-0.5px] text-[#2C2823] mt-1">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="text-center px-4">
              <div className="flex justify-center mb-4 text-[#C5A46E]">
                {'★★★★★'}
              </div>
              <p className="text-[#2C2823] leading-relaxed mb-4 text-[15px]">
                "{review.text}"
              </p>
              <p className="text-xs tracking-[1.5px] text-[#6B665F]">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;