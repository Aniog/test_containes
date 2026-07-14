import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah M.', text: 'The quality surpassed my expectations. The Golden Sphere Huggies have become my daily staple.', rating: 5 },
    { name: 'Elena K.', text: 'Beautifully packaged and even more stunning in person. A perfect self-gift.', rating: 5 },
    { name: 'Julianne R.', text: 'Velmora has that quiet luxury feel without the extreme price tag. Highly recommend.', rating: 5 },
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {reviews.map((rev, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-6">
              <div className="flex gap-1">
                {[...Array(rev.rating)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 text-accent-gold fill-accent-gold" />
                ))}
              </div>
              <p className="font-serif italic text-xl leading-relaxed text-primary/80">"{rev.text}"</p>
              <span className="text-[10px] uppercase letter-spacing-wide text-primary/50">— {rev.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
