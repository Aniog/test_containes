import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      text: "The quality is absolutely stunning. I've worn my Vivid Aura ear cuff every day since it arrived and it still looks brand new.",
    },
    {
      id: 2,
      name: "Elena R.",
      text: "Beautiful packaging and incredible jewelry. The Golden Sphere huggies are the perfect weight. Exactly what I was looking for.",
    },
    {
      id: 3,
      name: "Chloe T.",
      text: "I bought the Royal Heirloom set as a gift for my sister and she cried when she opened it. Such elegant, timeless designs.",
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-serif text-center mb-16">Loved by You</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col items-center text-center p-8 bg-stone-50/50 rounded-sm">
              <div className="flex gap-1 text-gold-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-stone-600 mb-6 flex-grow text-lg font-serif italic leading-relaxed">
                "{review.text}"
              </p>
              <p className="text-xs uppercase tracking-widest font-medium text-foreground">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;