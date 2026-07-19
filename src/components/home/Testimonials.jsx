import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah L.', text: 'The Golden Sphere Huggies are my new everyday staple. The quality is incredible for the price.', stars: 5 },
    { name: 'Emma R.', text: 'Absolutely beautiful necklace. The packaging felt so premium, perfect for a self-gift.', stars: 5 },
    { name: 'Jessica M.', text: 'Exceeded my expectations. The "quiet luxury" vibe is exactly what I was looking for.', stars: 5 }
  ];

  return (
    <section className="py-24 bg-secondary/10 border-y border-border">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="brand-title text-sm text-center mb-16 text-muted-foreground">What our community says</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {reviews.map((review, idx) => (
            <div key={idx} className="space-y-6 flex flex-col items-center">
              <div className="flex space-x-1">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-serif italic text-xl leading-relaxed">"{review.text}"</p>
              <span className="brand-title text-[10px] uppercase tracking-widest">{review.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
