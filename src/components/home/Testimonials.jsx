import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Sophia R.', text: 'The quality surpassed my expectations. The Golden Sphere Huggies have become my daily signature piece.', stars: 5 },
    { name: 'Elena M.', text: 'Found the perfect gift for my bridesmaid. The packaging was as stunning as the necklace itself.', stars: 5 },
    { name: 'Isabella K.', text: 'Exquisite design and remarkably comfortable. I never want to take my Amber Lace earrings off.', stars: 5 },
  ];

  return (
    <section className="py-24 bg-[#F9F8F6] border-y border-brand-text/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {reviews.map((review, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex justify-center space-x-1 text-brand-accent">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg font-serif italic text-brand-text/80 leading-relaxed px-4">
                "{review.text}"
              </p>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-neutral">
                {review.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
