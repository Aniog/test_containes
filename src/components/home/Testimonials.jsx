import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Elena M.', text: 'The Golden Sphere Huggies are my new everyday staple. The quality is exceptional for the price.' },
    { name: 'Sophia R.', text: 'Beautifully packaged and even more stunning in person. I get compliments every time I wear my necklace.' },
    { name: 'Isabella K.', text: 'Quiet luxury at its finest. Velmora pieces feel substantial and the gold tone is perfect.' },
  ];

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="flex gap-1 mb-6 text-gold-600">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="text-luxury-black/80 font-serif italic text-lg leading-relaxed mb-6">
                "{review.text}"
              </p>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-black/40">
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
