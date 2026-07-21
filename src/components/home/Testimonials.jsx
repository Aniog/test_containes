import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new.",
      name: "Lara S.",
      rating: 5,
    },
    {
      id: 2,
      text: "Bought the Royal Heirloom Set as a gift for my sister. She cried. Best purchase I've made this year.",
      name: "Priya M.",
      rating: 5,
    },
    {
      id: 3,
      text: "Finally found jewelry that doesn't turn my skin green. The gold tone is so warm and rich.",
      name: "Hannah K.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-[#F8F5F1] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[3px] text-[#A67C52]">LOVED BY MANY</span>
          <h2 className="font-serif text-4xl tracking-[1px] text-[#1C1917] mt-1">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#A67C52] text-[#A67C52]" />
                ))}
              </div>
              <p className="text-[#4A4640] leading-relaxed mb-6 text-[15px]">
                "{review.text}"
              </p>
              <p className="text-sm tracking-[1px] text-[#1C1917]">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
