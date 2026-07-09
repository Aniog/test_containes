import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Sophia L.', text: "The quality is unmatched for the price. I've worn my Golden Sphere Huggies every day for months and they still look brand new.", stars: 5 },
    { name: 'Emma W.', text: "Absolutely stunning packaging. It felt like a true luxury experience from start to finish. The Royal Heirloom Set is breathtaking.", stars: 5 },
    { name: 'Olivia M.', text: "I love the minimal, clean aesthetic. Perfect for gifting and even better for self-treats! Fast shipping as well.", stars: 5 },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-20 uppercase tracking-widest">Kind Words</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {reviews.map((review, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex space-x-1 mb-8">
                {[...Array(review.stars)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#9D8C70] text-[#9D8C70]" />
                ))}
              </div>
              <p className="text-lg md:text-xl font-serif text-[#1A1A1A] mb-8 leading-relaxed italic">
                "{review.text}"
              </p>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#9D8C70]">{review.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
