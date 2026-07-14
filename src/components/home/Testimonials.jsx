import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Sarah M.',
      text: 'The Golden Sphere Huggies are my new everyday staple. They feel so high-end but aren’t heavy at all.',
      rating: 5
    },
    {
      name: 'Elena R.',
      text: 'I bought the Majestic Flora necklace for a wedding and received so many compliments. It’s absolutely stunning.',
      rating: 5
    },
    {
      name: 'Julianna K.',
      text: 'Packaging was beautiful and shipping was incredibly fast. The quality rivals much more expensive brands.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-6">
              <div className="flex space-x-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg font-serif italic text-gray-700 leading-relaxed font-light">
                "{review.text}"
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
