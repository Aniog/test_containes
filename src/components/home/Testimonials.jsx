import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah L.', text: 'The quality of the Ear Cuff is exceptional. It has a beautiful weight to it and the crystal detail is subtle yet radiant.', rating: 5 },
    { name: 'Elena M.', text: 'I purchased the Golden Sphere Huggies for my wedding and they were the perfect finishing touch. Quiet luxury at its best.', rating: 5 },
    { name: 'Jessica R.', text: 'Fast shipping and beautiful packaging. It felt like I was opening a gift even though I bought it for myself.', rating: 5 },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-sm uppercase tracking-[0.3em] font-medium text-muted-foreground mb-16 text-center">Loved by Many</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex space-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg md:text-xl font-serif italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground">
                {review.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
