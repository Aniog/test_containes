import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  { name: 'Elena G.', text: 'The quality of the 18K plating is incredible. I wear my huggies every single day and they still look brand new.' },
  { name: 'Sarah M.', text: 'Fast shipping and beautiful packaging. It felt like receiving a gift from a dear friend. So happy with my necklace.' },
  { name: 'Chloe R.', text: 'Minimalist, elegant, and timeless. Velmora has become my go-to for gifting and self-treats alike.' }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-stone-50 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {REVIEWS.map((review) => (
            <div key={review.name} className="flex flex-col items-center text-center space-y-6">
              <div className="flex space-x-1 text-stone-900">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <blockquote className="font-serif italic text-lg text-stone-700 leading-relaxed max-w-xs">
                "{review.text}"
              </blockquote>
              <cite className="serif-caps text-[10px] tracking-[0.2em] not-italic text-stone-400">
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
