import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { 
      name: 'Sarah M.', 
      text: 'The Golden Sphere Huggies are my new everyday staple. So lightweight, I forget I\'m wearing them—until the compliments start.', 
      location: 'New York' 
    },
    { 
      name: 'Elena R.', 
      text: 'Exquisite packaging and even more beautiful jewelry. The Majestic Flora necklace feels like a modern heirloom.', 
      location: 'London' 
    },
    { 
      name: 'Jessica K.', 
      text: 'I\'ve worn my set every day for months and the luster is still as bright as day one. Truly exceptional quality.', 
      location: 'Sydney' 
    },
  ];

  return (
    <section className="py-32 bg-background px-6 md:px-12 border-y border-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {reviews.map((review, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="flex gap-1.5 text-primary mb-8 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={11} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="font-serif text-xl italic tracking-wide text-foreground/80 leading-relaxed mb-10 max-w-sm">
                "{review.text}"
              </p>
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em]">{review.name}</p>
                <p className="text-[9px] uppercase tracking-widest text-muted-foreground italic font-serif opacity-60">Verified Purchase, {review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
