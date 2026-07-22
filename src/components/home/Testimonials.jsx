import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Elena M.', text: 'Absolutely stunning. The quality of the gold plating is incredible, it hasn’t tarnished at all even after months of daily wear.' },
    { name: 'Sarah K.', text: 'The perfect gift! The packaging was so elegant and the necklace itself is just beautiful. I’ll definitely be back.' },
    { name: 'Julia R.', text: 'I love how lightweight yet substantial these feel. Finally found jewelry that doesn’t irritate my sensitive skin.' }
  ];

  return (
    <section className="py-24 bg-brand-cream/50 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {reviews.map((review, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} fill="#D4AF37" color="#D4AF37" />
              ))}
            </div>
            <p className="font-serif text-xl italic mb-6 text-brand-charcoal">"{review.text}"</p>
            <span className="text-[10px] uppercase tracking-widest text-brand-stone font-bold font-sans">{review.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
