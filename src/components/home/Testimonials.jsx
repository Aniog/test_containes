import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { id: 1, name: "Sarah M.", text: "Absolutely stunning. The weight and finish feel so high-end for the price.", stars: 5 },
    { id: 2, name: "Elena K.", text: "I've worn my huggies daily for months and they still look brand new. No tarnishing!", stars: 5 },
    { id: 3, name: "Jessica R.", text: "The packaging was editorial-worthy. Made for such a perfect gift for my sister.", stars: 5 },
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif tracking-tight mb-2 uppercase tracking-[0.2em] text-xs font-semibold text-zinc-400">Reviews</h2>
          <p className="font-serif text-3xl italic">Love from our community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col items-center text-center space-y-4">
              <div className="flex text-accent">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="font-serif text-lg leading-relaxed text-zinc-700 italic">"{review.text}"</p>
              <span className="uppercase-widest text-[10px] tracking-[0.2em] font-semibold text-zinc-400">
                — {review.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
