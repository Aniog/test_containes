import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah L.', text: "The quality surpassed my expectations. I haven't taken these huggies off in three months and they still look brand new.", rating: 5 },
    { name: 'Elena M.', text: "Exactly what I was looking for—elegant, minimal, and premium. The packaging also makes it the perfect gift.", rating: 5 },
    { name: 'Jessica R.', text: "I love how these pieces feel so lightweight yet look so substantial. Truly quiet luxury at an accessible price.", rating: 5 },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#FCFBF7]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                ))}
              </div>
              <blockquote className="font-serif text-lg md:text-xl text-slate-700 leading-relaxed italic">
                "{review.text}"
              </blockquote>
              <cite className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#A8A29A] not-italic">
                — {review.name}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
