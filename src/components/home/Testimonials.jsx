import React from 'react';
import { Star } from 'lucide-react';
const Testimonials = () => {
  const reviews = [
    { name: "Sarah", initial: "M", text: "Truly the most beautiful earrings I own. The packaging was so premium too." },
    { name: "Elena", initial: "K", text: "The quality is outstanding for the price point. No tarnishing even after months of wear." },
    { name: "Jessica", initial: "R", text: "Purchased as a gift, and now I want one for myself! Perfectly timed delivery." }
  ];
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {reviews.map((review, idx) => (
          <div key={idx} className="flex flex-col items-center text-center gap-4">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" className="text-black" />
              ))}
            </div>
            <p className="font-serif text-xl italic leading-relaxed">"{review.text}"</p>
            <div className="mt-4">
              <span className="font-sans uppercase tracking-[0.2em] text-[10px] text-gray-400">
                {review.name} {review.initial}.
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
