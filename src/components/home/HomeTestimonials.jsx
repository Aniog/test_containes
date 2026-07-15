import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Elena R.",
    text: "The quality of the Golden Sphere Huggies is unbelievable for the price. They haven't tarnished at all after 3 months of daily wear.",
    rating: 5
  },
  {
    id: 2,
    name: "Julianne T.",
    text: "Received my Majestic Flora necklace today. The crystal detail is exquisite. It feels like a much more expensive designer piece.",
    rating: 5
  },
  {
    id: 3,
    name: "Sofia K.",
    text: "Perfect gifting experience! The packaging was so premium, and my sister absolutely loved her new ear cuffs. Highly recommend.",
    rating: 5
  }
];

const HomeTestimonials = () => {
  return (
    <section className="py-24 bg-white border-y border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 flex flex-col items-center">
           <div className="flex gap-1 mb-4 text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
           </div>
           <h2 className="text-3xl font-serif tracking-tight italic">Rave Reviews</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {REVIEWS.map((review) => (
            <div key={review.id} className="flex flex-col items-center text-center gap-6">
              <p className="text-lg font-serif leading-relaxed italic text-[#1A1A1A]/80">
                "{review.text}"
              </p>
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-widest font-bold border-t border-gold pt-2">{review.name}</span>
                <span className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 mt-1">Verified Buyer</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
