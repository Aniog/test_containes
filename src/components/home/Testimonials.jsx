import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "Sarah L.", text: "The quality of the Golden Sphere Huggies is incredible. I've worn them everyday for 3 months and they still look brand new.", rating: 5 },
    { name: "Elena R.", text: "Velmora jewelry is the perfect balance of luxury and affordability. The packaging itself is a beautiful experience.", rating: 5 },
    { name: "Michelle K.", text: "I bought the Royal Heirloom Set as a gift for my sister's wedding. She loved it so much she ended up wearing it on the big day!", rating: 5 }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {reviews.map((review, index) => (
          <div key={index} className="text-center space-y-6 flex flex-col items-center">
            <div className="flex space-x-1 text-accent">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="font-serif italic text-lg leading-relaxed text-primary/80">
              "{review.text}"
            </p>
            <div className="pt-2">
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-muted-foreground">{review.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
