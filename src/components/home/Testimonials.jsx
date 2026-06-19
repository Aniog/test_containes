import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    { name: 'Sarah M.', text: "Absolutely stunning. The huggies feel so much more premium than others I've tried. The packaging was also beautiful.", stars: 5 },
    { name: 'Elena R.', text: "Bought the Flora Nectar necklace for a wedding and got so many compliments. It's my new favorite piece.", stars: 5 },
    { name: 'Jessica K.', text: "Fast shipping and perfect quality. The gold tone is warm and luxurious, not cheap-looking at all.", stars: 5 },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#B08D57] mb-4 font-bold">Reviews</p>
          <h2 className="text-3xl md:text-4xl font-serif">Loved by You</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="flex space-x-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#B08D57] fill-[#B08D57]" />
                ))}
              </div>
              <p className="text-stone-600 font-light italic leading-relaxed mb-8 text-sm md:text-base">
                "{review.text}"
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
